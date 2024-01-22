"use stric";
import { OPTIONS_HEADER, API_KEY } from "../config.js";
import renderPreview from "./renderPreview.js";

/**
 * @param {object} SearchHotel Faz toda busca do hotel
 */
class SearchHotel {
  _id;
  _domain;

  _checkinInput = document.getElementById("checkin");
  _checkoutInput = document.getElementById("checkout");
  _adultInput = document.getElementById("adult");
  _childrenInput = document.getElementById("child");
  _locale = navigator.language.replace("-", "_");
  btnSearch = document.querySelector(".search__button");

  getQuery() {
    const query = document.querySelector(".search__input").value;
    return query;
  }

  handlerClick(handler) {
    this.btnSearch.addEventListener("click", handler);
  }

  /**
   * @param {object} getCityInput Recebe o nome da cidade e pega o código do país (e.g. BR)
   */

  async getCityInput(text) {
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${text}&format=json&apiKey=${API_KEY}`
      );

      const result = await response.json();

      const city = await result.results[0].city;
      const countryCode = await result.results[0].country_code;
      const domain = countryCode.toUpperCase();

      this._domain = domain;

      return this.getCityName(city);
    } catch (err) {
      throw err;
    }
  }
  /**
   * @param {object} getCityName Recebe o nome da cidade o código do país para fazer a buca de hóteis
   */

  async getCityName(city) {
    try {
      const response = await fetch(
        `https://hotels-com-provider.p.rapidapi.com/v2/regions?query=${city}&domain=${this._domain}&locale=${this._locale}`,
        OPTIONS_HEADER
      );

      const result = await response.json();
      const getId = await result.data[0].essId.sourceId;

      this._id = getId;

      return getId;
    } catch (err) {
      throw err;
    }
  }

  /**
   * @param {object} getHotel Pega o hotel com base no dados fornecidados de getCityName
   */

  async getHotel() {
    try {
      if (!this._childrenInput.value) this._childrenInput.value = 0;

      const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?region_id=${this._id}&locale=${this._locale}&checkin_date=${this._checkinInput.value}&sort_order=RECOMMENDED&adults_number=${this._adultInput.value}&domain=${this._domain}&checkout_date=${this._checkoutInput.value}&children_ages=${this._childrenInput.value}`;

      const response = await fetch(url, OPTIONS_HEADER);

      if (!response.ok) throw renderPreview.renderError();

      const result = await response.json();

      return result;
    } catch (err) {
      throw err;
    }
  }

  /**
   * @return Retorna detalhes do importantes para a renderização do hotel
   */
  async hotelDetails() {
    try {
      const id = location.hash.slice(1);
      if (!id || !this._domain) return;

      const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/details?domain=${this._domain}&hotel_id=${id}&locale=${this._locale}`;

      const data = await fetch(url, OPTIONS_HEADER);

      if (!data.ok) throw new Error();

      const result = await data.json();

      return result;
    } catch (error) {
      throw error;
    }
  }
  /**
   * @returns Retorna as avaliações do hotel feita pelos hóspedes
   */
  async hotelReviews() {
    try {
      const id = location.hash.slice(1);
      if (!id || !this._domain) return;

      const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/reviews/list?domain=${this._domain}&locale=${this._locale}&hotel_id=${id}`;

      const data = await fetch(url, OPTIONS_HEADER);

      if (!data.ok) throw new Error();

      const result = await data.json();

      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default new SearchHotel();

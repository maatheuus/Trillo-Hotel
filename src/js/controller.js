"use stric";
import * as model from "./model.js";
import renderPreview from "./views/renderPreview.js";
import paginationView from "./views/paginationView.js";
import renderView from "./views/renderView.js";
import hotelView from "./views/hotelView.js";
import searchHotel from "./views/searchHotel.js";
import favoriteView from "./views/favoriteView.js";

const controlSearchResults = async function () {
  try {
    renderPreview.renderSpinner();

    // Pega a cidade do input
    const city = searchHotel.getQuery();
    if (!city) throw new Error();

    // Passa a cidade para o objeto
    await searchHotel.getCityInput(city);

    // Pega os dados e manda para o state Object
    await model.hotelData();

    // Renderiza a preview na página de busca
    renderPreview.render(model.getSearchResults(1));

    // Renderiza os botões para a paginação
    paginationView.render(model.state.search);
  } catch (error) {
    renderPreview.renderError();
  }
};

const controlPaginiation = function (goTo) {
  renderPreview.render(model.getSearchResults(goTo));

  paginationView.render(model.state.search);
};

//Pega dados nescessários para a renderização do hotel
const controlDetails = async function () {
  try {
    await model.getDetailsHotel();
    await model.getReviews();
  } catch (error) {
    throw error;
  }
};

// Controla a View quando o título ou a hash da URL tiver alteração
const controlView = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    renderView.renderSpinner();

    model.loadFavorite(id);

    await controlDetails();

    hotelView.render(model.state);
  } catch (error) {
    hotelView.renderError();
  }
};

const controlAddFavorite = function () {
  // Se falso ira add o hotel atual nos favoritos do usúario
  if (!model.state.hotel.favorite) model.addFavorite(model.state.hotel);
  // Se verdadeiro ira remover o hotel atual dos favoritos do usúario
  else model.deleteBookmark(model.state.hotel.hotelId);

  // Ira atualizar a View do hotel conforme adicionado ou deletado o hotel dos favoritos
  renderView.update(model.state.hotel);

  // Ira atualizar a View dos favoritos para renderizar a preview do hotel
  favoriteView.render(model.state.favorites);
};

const controlFavorite = function () {
  favoriteView.render(model.state.favorites);
};

const init = async function () {
  favoriteView.addHandlerRender(controlFavorite);
  searchHotel.handlerClick(controlSearchResults);
  renderPreview.handlerClick(controlView);
  paginationView.addHandler(controlPaginiation);
  hotelView.addHandlerAddFavorite(controlAddFavorite);
  renderView.addHandlerRender(controlView);
};
init();

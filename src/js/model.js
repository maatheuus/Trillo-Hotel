"use strict";
import searchHotel from "./views/searchHotel.js";
import { RES_PER_PAGE } from "./config.js";
import favoriteView from "./views/favoriteView.js";

/**
 * @param {Object} state Vai recebe os dados dos hóteis
 */
export const state = {
  hotel: {},
  favorites: [],
  search: {
    results: [],
    page: 1,
    perPage: RES_PER_PAGE,
  },
  detailsHotel: {},
  reviews: {},
};

export const hotelData = async function () {
  try {
    const details = await searchHotel.getHotel();

    state.search.results = details.properties.map((value) => {
      return {
        hotelId: value.id,
        roomsLeft: value.availability?.minRoomsLeft,
        imageUrl: value.propertyImage.image.url,
        imageDescription: value.propertyImage.image.description,
        nameHotel: value.name,
        reviewScore: value.reviews.score,
        reviewTotal: value.reviews.total,
        local: value.neighborhood?.name,
        symbol: value.price.lead.currencyInfo.symbol,
        price: Math.round(value.price.lead.amount),
      };
    });
  } catch (error) {
    throw error;
  }
};

export const getSearchResults = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.perPage;
  const end = page * state.search.perPage;

  return state.search.results.slice(start, end);
};

export const getDetailsHotel = async function () {
  try {
    const data = await searchHotel.hotelDetails();

    if (!data) return;

    const img = data.propertyGallery.images
      .slice(0, 3)
      .map((img) => img.image.url);
    const ameni = data.summary.amenities.topAmenities.items.map(
      (amenity) => amenity.text
    );

    const icon = Math.floor(data.summary.overview.propertyRating.rating);

    const description = {
      images: img,
      amenities: ameni,
      description: data.summary.location.whatsAround.editorial.content[0],
      address: data.summary.location.address.city,
      icon: icon,
    };
    state.detailsHotel = description;
  } catch (error) {
    throw error;
  }
};

export const getReviews = async function () {
  try {
    const data = await searchHotel.hotelReviews();

    if (!data) return;

    const score = data.reviewInfo.reviews.slice(0, 2).map((score) => {
      const value = score.reviewScoreWithDescription.value;
      const scoreValue = value.split("-").slice(0, 1).join("\n");
      return scoreValue;
    });

    const reviewName = data.reviewInfo.reviews.slice(0, 2).map((duration) => {
      const data = duration.stayDuration;
      const nameReview = data.split(",").slice(0, -1).join("\n");
      return nameReview;
    });

    state.reviews = data.reviewInfo.reviews.slice(0, 2).map((value) => {
      return {
        score: score,
        reviewInfo: value.text,
        name: reviewName,
        stayDuration: value.submissionTimeLocalized,
      };
    });
  } catch (error) {
    throw error;
  }
};

export const loadFavorite = function (id) {
  try {
    // Se verdadeiro marca o hotel atual como favoritado
    if (state.favorites.some((favorite) => favorite.hotelId === id))
      state.hotel.favorite = true;
    // Se falso remove o hotel atual como favoritado
    else state.hotel.favorite = false;
  } catch (error) {
    favoriteView.renderError();
  }
};

const setFavorites = function () {
  localStorage.setItem("favorites", JSON.stringify(state.favorites));
};

export const addFavorite = function (hotel) {
  //add ffavorito
  state.favorites.push(hotel);

  // Marque o hotel atual como favorito
  state.hotel.favorite = true;

  setFavorites();
};

export const deleteBookmark = function (id) {
  // Deleta o hotel atual
  const index = state.favorites.findIndex((el) => el.hotelId === id);

  state.favorites.splice(index, 1);

  // Deleta o hotel atual como favorito
  state.hotel.favorite = false;

  setFavorites();
};

const init = function () {
  const storage = localStorage.getItem("favorites");

  if (storage) state.favorites = JSON.parse(storage);
};
init();

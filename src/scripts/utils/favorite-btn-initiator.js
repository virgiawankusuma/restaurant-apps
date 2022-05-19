import FavoriteRestaurantDB from '../data/favoriterestaurant-db';
import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isResgetRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isResgetRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantDB.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();

    const FavoriteButton = document.querySelector('#favoriteButton');
    FavoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantDB.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createFavoritedButtonTemplate();

    const FavoriteButton = document.querySelector('#favoriteButton');
    FavoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantDB.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;

import FavoriteRestaurantDB from '../../data/favoriterestaurant-db';
import { createRestoItemTemplate } from '../templates/template-creator';

import '../../component/resto-favorite';

const Favorite = {
  async render() {
    return `
      <resto-favorite></resto-favorite>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantDB.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#resto-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Favorite;

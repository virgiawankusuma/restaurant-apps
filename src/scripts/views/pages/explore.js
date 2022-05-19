import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

import '../../component/resto-list';

const Explore = {
  async render() {
    return `
      <resto-list></resto-list>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getResto();
    const restaurantsContainer = document.querySelector('#resto-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Explore;

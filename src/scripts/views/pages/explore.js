import RestaurantSource from '../../data/restaurant-source';
import createRestoItemTemplate from '../templates/template-creator';

const Explore = {
  async render() {
    return `
      <h2>
        <span class="title-content">Explore Restaurant</span>
      </h2>

      <div id="resto-list" class="row"></div>
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

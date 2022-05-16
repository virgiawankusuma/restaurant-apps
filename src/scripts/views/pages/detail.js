import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Explore = {
  async render() {
    return `
      <h2>
        <span class="title-content">Detail Restaurant</span>
      </h2>

      <div id="resto-detail" class="row"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(detail.restaurant);
  },
};

export default Explore;

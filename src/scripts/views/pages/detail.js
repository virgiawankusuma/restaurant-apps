import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';

const Explore = {
  async render() {
    return `
      <h2>
        <span class="title-content">Explore Restaurant</span>
      </h2>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailResto(url.id);
    console.log(restaurant);
  },
};

export default Explore;

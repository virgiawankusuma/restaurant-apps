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
    const restaurants = await RestaurantSource.getResto();
    console.log(restaurants);
  },
};

export default Explore;

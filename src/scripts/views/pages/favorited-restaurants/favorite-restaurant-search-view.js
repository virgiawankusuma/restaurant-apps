import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <h2>
        <span class="title-content">Your Favorited Restaurant</span>
      </h2>
      <div id="restaurant-search-container">
        <input id="query" class="search-box" type="search" placeholder="Search for a restaurant" aria-label="Search for a restaurant">
        <div id="resto-list" class="row resto-list"></div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.querySelector('#query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestoItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('resto-list').innerHTML = html;

    document.getElementById('resto-list').dispatchEvent(new Event('resto-list:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `
    <div class="row" id="resto-item__not__found">
      <p>Tidak ada restaurant untuk ditampilkan</p>
    </div>
    `;
  }
}

export default FavoriteRestaurantSearchView;

import FavoriteRestaurantDB from '../../data/favoriterestaurant-db';
import FavoriteRestaurantSearchView from './favorited-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './favorited-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './favorited-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantDB });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantDB });
  },
};

export default Favorite;

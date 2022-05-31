import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-btn-initiator';
import FavoriteRestaurantDB from '../src/scripts/data/favoriterestaurant-db';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    FavoriteButtonContainer: document.querySelector('#FavoriteButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantDB,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };

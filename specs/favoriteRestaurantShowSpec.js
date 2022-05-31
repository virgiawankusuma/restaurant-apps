import FavoriteRestaurantDB from '../src/scripts/data/favoriterestaurant-db';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-show-presenter';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been favorited', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDB);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been favorited', (done) => {
      document.getElementById('resto-list').addEventListener('resto-list:updated', () => {
        expect(document.querySelectorAll('#resto-item__not__found').length)
          .toEqual(1);

        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDB);
      favoriteRestaurants.getAllRestaurants.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('resto-list').addEventListener('resto-list:updated', () => {
        expect(document.querySelectorAll('#resto-item').length).toEqual(2);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDB);
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: 11, name: 'A', vote_average: 3, overview: 'Sebuah resto A',
        },
        {
          id: 22, name: 'B', vote_average: 4, overview: 'Sebuah resto B',
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});

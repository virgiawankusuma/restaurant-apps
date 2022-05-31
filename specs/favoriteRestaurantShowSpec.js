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
      const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantDB);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurant,
      });

      expect(favoriteRestaurant.getAllRestaurant).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been favorited', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('#resto-item__not__found').length)
          .toEqual(1);

        done();
      });

      const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantDB);
      favoriteRestaurant.getAllRestaurant.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurant,
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('#resto-item').length).toEqual(2);
        done();
      });

      const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantDB);
      favoriteRestaurant.getAllRestaurant.and.returnValues([
        {
          id: 11, title: 'A', vote_average: 3, overview: 'Sebuah resto A',
        },
        {
          id: 22, title: 'B', vote_average: 4, overview: 'Sebuah resto B',
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurant,
      });
    });
  });
});

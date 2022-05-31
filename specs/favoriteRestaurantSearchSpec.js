import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantDB from '../src/scripts/data/favoriterestaurant-db';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-search-view';

describe('Searching restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };
  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDB);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurants('resto a');

      expect(presenter.latestQuery).toEqual('resto a');
    });

    it('should ask the model to search for favorited restaurants', () => {
      searchRestaurants('resto a');

      expect(favoriteRestaurants.searchRestaurants).toHaveBeenCalledWith('resto a');
    });

    it('should show - when the restaurant returned does not contain a title', (done) => {
      document.getElementById('restaurant-search-container').addEventListener('resto-list:searched:updated', () => {
        const restaurantTitles = document.querySelectorAll('#resto-title');
        expect(restaurantTitles.item(0).textContent).toEqual('-');

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('resto a').and.returnValues([
        { id: 444 },
      ]);

      searchRestaurants('resto a');
    });

    it('should show the restaurants found by Favorite Restaurants', (done) => {
      document.getElementById('restaurant-search-container').addEventListener('resto-list:searched:updated', () => {
        expect(document.querySelectorAll('#resto-list').length).toEqual(3);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('resto a').and.returnValues([
        { id: 111, name: 'resto abc' },
        { id: 222, name: 'ada juga resto abcde' },
        { id: 333, name: 'ini juga boleh resto a' },
      ]);

      searchRestaurants('resto a');
    });

    it('should show the name of the restaurants found by Favorite restaurants', (done) => {
      document.getElementById('restaurant-search-container').addEventListener('resto-list:searched:updated', () => {
        const restaurantTitles = document.querySelectorAll('#resto-title');
        expect(restaurantTitles.item(0).textContent).toEqual('resto abc');
        expect(restaurantTitles.item(1).textContent).toEqual('ada juga resto abcde');
        expect(restaurantTitles.item(2).textContent).toEqual('ini juga boleh resto a');

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('resto a').and.returnValues([
        { id: 111, name: 'resto abc' },
        { id: 222, name: 'ada juga resto abcde' },
        { id: 333, name: 'ini juga boleh resto a' },
      ]);

      searchRestaurants('resto a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      searchRestaurants('    ');

      expect(favoriteRestaurants.getAllRestaurants)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurant could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restaurant-search-container')
        .addEventListener('resto-list:searched:updated', () => {
          expect(document.querySelectorAll('#resto-item__not__found').length)
            .toEqual(1);
          done();
        });

      favoriteRestaurants.searchRestaurants.withArgs('resto a').and.returnValues([]);

      searchRestaurants('resto a');
    });
  });

  it('should not show any restaurant', (done) => {
    document.getElementById('restaurant-search-container').addEventListener('resto-list:searched:updated', () => {
      expect(document.querySelectorAll('#resto-list').length).toEqual(0);
      done();
    });

    favoriteRestaurants.searchRestaurants.withArgs('resto a').and.returnValues([]);

    searchRestaurants('resto a');
  });
});

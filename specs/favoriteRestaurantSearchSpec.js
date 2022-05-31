import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-search-view';

describe('Searching restaurants', () => {
  let presenter;
  let favoriteRestaurant;
  let view;

  const searchRestaurant = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };
  const constructPresenter = () => {
    favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurant,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurant('resto a');

      expect(presenter.latestQuery).toEqual('resto a');
    });

    it('should ask the model to search for favorited restaurants', () => {
      searchRestaurant('resto a');

      expect(favoriteRestaurant.searchRestaurant).toHaveBeenCalledWith('resto a');
    });

    it('should show - when the restaurant returned does not contain a title', (done) => {
      document.getElementById('restaurant-search-container').addEventListener('restaurants:searched:updated', () => {
        const restaurantTitles = document.querySelectorAll('.resto-title');
        expect(restaurantTitles.item(0).textContent).toEqual('-');

        done();
      });

      favoriteRestaurant.searchRestaurant.withArgs('resto a').and.returnValues([
        { id: 444 },
      ]);

      searchRestaurant('resto a');
    });

    it('should show the restaurants found by Favorite Restaurants', (done) => {
      document.getElementById('restaurant-search-container').addEventListener('restaurants:searched:updated', () => {
        expect(document.querySelectorAll('.restaurant').length).toEqual(3);
        done();
      });

      favoriteRestaurant.searchRestaurant.withArgs('resto a').and.returnValues([
        { id: 111, title: 'resto abc' },
        { id: 222, title: 'ada juga resto abcde' },
        { id: 333, title: 'ini juga boleh resto a' },
      ]);

      searchRestaurant('resto a');
    });

    it('should show the name of the restaurants found by Favorite restaurants', (done) => {
      document.getElementById('restaurant-search-container').addEventListener('restaurants:searched:updated', () => {
        const restaurantTitles = document.querySelectorAll('.resto-title');
        expect(restaurantTitles.item(0).textContent).toEqual('resto abc');
        expect(restaurantTitles.item(1).textContent).toEqual('ada juga resto abcde');
        expect(restaurantTitles.item(2).textContent).toEqual('ini juga boleh resto a');

        done();
      });

      favoriteRestaurant.searchRestaurant.withArgs('resto a').and.returnValues([
        { id: 111, title: 'resto abc' },
        { id: 222, title: 'ada juga resto abcde' },
        { id: 333, title: 'ini juga boleh resto a' },
      ]);

      searchRestaurant('resto a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurant(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurant('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurant('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurant('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      searchRestaurant('    ');

      expect(favoriteRestaurant.getAllRestaurant)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurant could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restaurant-search-container')
        .addEventListener('restaurants:searched:updated', () => {
          expect(document.querySelectorAll('#resto-item__not__found').length)
            .toEqual(1);
          done();
        });

      favoriteRestaurant.searchRestaurant.withArgs('resto a').and.returnValues([]);

      searchRestaurant('resto a');
    });
  });

  it('should not show any restaurant', (done) => {
    document.getElementById('restaurant-search-container').addEventListener('restaurants:searched:updated', () => {
      expect(document.querySelectorAll('.restaurant').length).toEqual(0);
      done();
    });

    favoriteRestaurant.searchRestaurant.withArgs('resto a').and.returnValues([]);

    searchRestaurant('resto a');
  });
});

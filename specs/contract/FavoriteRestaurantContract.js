const itActsAsFavoriteRestaurantModel = (favoriteRestaurants) => {
  it('should return the Restaurant that has been added', async () => {
    favoriteRestaurants.putRestaurant({ id: 1 });
    favoriteRestaurants.putRestaurant({ id: 2 });

    expect(await favoriteRestaurants.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriteRestaurants.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favoriteRestaurants.getRestaurant(3))
      .toEqual(undefined);
  });

  it('should refuse a Restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurants.putRestaurant({ aProperty: 'property' });

    expect(await favoriteRestaurants.getAllRestaurants())
      .toEqual([]);
  });

  it('can return all of the Restaurants that have been added', async () => {
    favoriteRestaurants.putRestaurant({ id: 1 });
    favoriteRestaurants.putRestaurant({ id: 2 });

    expect(await favoriteRestaurants.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite Restaurant', async () => {
    favoriteRestaurants.putRestaurant({ id: 1 });
    favoriteRestaurants.putRestaurant({ id: 2 });
    favoriteRestaurants.putRestaurant({ id: 3 });

    await favoriteRestaurants.deleteRestaurant(1);

    expect(await favoriteRestaurants.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a Restaurant even though the Restaurant has not been added', async () => {
    favoriteRestaurants.putRestaurant({ id: 1 });
    favoriteRestaurants.putRestaurant({ id: 2 });
    favoriteRestaurants.putRestaurant({ id: 3 });

    await favoriteRestaurants.deleteRestaurant(4);

    expect(await favoriteRestaurants.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should be able to search for restaurants', async () => {
    favoriteRestaurants.putRestaurant({ id: 1, name: 'resto a' });
    favoriteRestaurants.putRestaurant({ id: 2, name: 'resto b' });
    favoriteRestaurants.putRestaurant({ id: 3, name: 'resto abc' });
    favoriteRestaurants.putRestaurant({ id: 4, name: 'ini mah resto abcd' });

    expect(await favoriteRestaurants.searchRestaurants('resto a')).toEqual([
      { id: 1, name: 'resto a' },
      { id: 3, name: 'resto abc' },
      { id: 4, name: 'ini mah resto abcd' },
    ]);
  });
};

export { itActsAsFavoriteRestaurantModel };

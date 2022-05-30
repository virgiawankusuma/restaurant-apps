const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('#resto-title a');

  const firstResto = locate('#resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#resto-item');
  const favoritedRestoTitle = await I.grabTextFrom('#resto-title a');

  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');

  I.amOnPage('/');

  const firstResto = locate('#resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#resto-item');
  const favoritedRestoTitle = await I.grabTextFrom('#resto-title a');
  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);

  I.amOnPage('/#/favorite');
  I.click('#resto-title a');

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#resto-item__not__found');
  const onFav = await I.grabTextFrom('#resto-item__not__found');
  assert.strictEqual(onFav, 'Tidak ada restaurant untuk ditampilkan');
});

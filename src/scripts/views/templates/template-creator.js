import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
<div class="col">
      <div class="card">
          <div class="card-img">
              <div class="city-label">
                  <span class="city-label-text">
                      Kota ${resto.city}
                  </span>
              </div>
              <img src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'images/heros/hero-image_2.jpg'}" alt="${resto.name}">
          </div>
          <div class="card-body">
              <div class="rating">
                  <i class="fas fa-star"></i>
                  <span>${resto.rating}</span>
              </div>
              <h3 class="card-title">
                  <a href="./#/detail/${resto.id}" title="Link ke halaman detail makanan">${resto.name}</a>
              </h3>
              <p class="card-text">${resto.description}</p>
          </div>
      </div>
  </div>
  `;

// eslint-disable-next-line import/prefer-default-export
export default createRestoItemTemplate;

import CONFIG from './config';

const API_ENDPOINT = {
  RESTO: `${CONFIG.BASE_URL}list`,
  RESTO_DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;

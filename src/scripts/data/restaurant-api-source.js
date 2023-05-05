import API_ENDPOINT from '../globals/api-endpoint.js';

// eslint-disable-next-line require-jsdoc
class RestaurantApiSource {
  // eslint-disable-next-line require-jsdoc
  static async exploreRestaurant() {
    const response = await fetch(API_ENDPOINT.EXPLORE);
    const responseJson = await response.json();
    return responseJson.results;
  }

  // eslint-disable-next-line require-jsdoc
  static async detailRestaurant(id) {
    // eslint-disable-next-line new-cap
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantApiSource;

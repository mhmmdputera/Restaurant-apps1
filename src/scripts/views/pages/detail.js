import UrlParser from '../../routes/url-parser.js';
import RestaurantApiSource from '../../data/restaurant-api-source.js';
import {createMovieDetailTemplate} from '../templates/template-creator.js';

const Detail = {
  async render() {
    return `
    <div id="resto" class="resto"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantApiSource.exploreRestaurant(url.id);
    console.log(resto);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createMovieDetailTemplate(resto);
  },
};

export default Detail;

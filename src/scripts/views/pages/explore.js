import RestaurantApiSource from '../../data/restaurant-api-source';

const ExploreRestaurant = {
  async render() {
    return `
     <div class="content">
       <h2 class="content__heading">Explore Restaurant</h2>
       <div id="resto" class="resto">
        </div>
      </div>
      `;
  },

  async afterRender() {
    const resto = await RestaurantApiSource.exploreRestaurant();
    const restoContainer = document.querySelector('#resto');
    resto.forEach((resto) => {
      restoContainer.innerHTML += createMovieItemTemplate(resto);
    });
    // TODO: tampilkan resto di dalam DOM
  },
};

export default ExploreRestaurant;

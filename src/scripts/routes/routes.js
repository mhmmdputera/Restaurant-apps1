import ExploreRestaurant from '../views/pages/explore.js';
import Detail from '../views/pages/detail.js';

const routes = {
  '/': ExploreRestaurant, // default page
  '/detail/:id': Detail,
};

export default routes;

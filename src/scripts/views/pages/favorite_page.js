import { animateLoading } from '../../utils/page-animation';
import FavoriteRestaurantsIdb from '../../model/favorite-restaurants-idb';
import { createRestaurantTemplate, createLoadingTemplate } from '../templates/template-creator';

const FavoritePage = {
  async render() {
    return `
        <div class="loading-animation"></div>
        <div class ="restaurants-list">
        </div>
        `;
  },

  async afterRender() {
    const loadingAnimation = document.querySelector('.loading-animation');
    const restaurantsContainer = document.querySelector('.restaurants-list');
    loadingAnimation.innerHTML = createLoadingTemplate();
    animateLoading();
    const restaurants = await FavoriteRestaurantsIdb.getAllRestaurants();
    console.log(restaurants);
    if (restaurants) {
      loadingAnimation.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
      });
    }
  },
};

export default FavoritePage;

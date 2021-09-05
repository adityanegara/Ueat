import { animateLoading } from '../../utils/page-animation';
import RestaurantSource from '../../model/restaurant-source';
import { createRestaurantTemplate, createLoadingTemplate } from '../templates/template-creator';

const ExplorePage = {
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
    const restaurants = await RestaurantSource.restaurantList();
    if (restaurants) {
      loadingAnimation.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
      });
    }
  },
};

export default ExplorePage;

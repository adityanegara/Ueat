import { animateLoading } from '../../utils/page-animation';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../model/restaurant-source';
import { createLoadingTemplate, createDetailRestaurantTemplate, renderMenus } from '../templates/template-creator';

const DetailPage = {
  async render() {
    return `
        <div class="loading-animation"></div>
        <div class="restaurant-detail"></div>`;
  },
  async afterRender() {
    const loadingAnimation = document.querySelector('.loading-animation');
    const restaurantDetailContainer = document.querySelector('.restaurant-detail');
    loadingAnimation.innerHTML = createLoadingTemplate();
    animateLoading();
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await RestaurantSource.detailRestaurant(url.id);

    if (response !== false) {
      loadingAnimation.innerHTML = '';
      const { restaurant } = response;
      restaurantDetailContainer.innerHTML = createDetailRestaurantTemplate(restaurant);
      this._menusClick(restaurant);
    }
  },
  _menusClick(restaurant) {
    const drinksMenuButton = document.querySelector('#drinks-menu-button');
    const foodsMenuButton = document.querySelector('#foods-menu-button');
    const menuContainer = document.querySelector('#restaurant-detail-menu-container');
    drinksMenuButton.addEventListener('click', () => {
      drinksMenuButton.classList.add('active');
      foodsMenuButton.classList.remove('active');
      menuContainer.innerHTML = `${renderMenus(restaurant.menus.drinks)}`;
    });
    foodsMenuButton.addEventListener('click', () => {
      drinksMenuButton.classList.remove('active');
      foodsMenuButton.classList.add('active');
      menuContainer.innerHTML = `${renderMenus(restaurant.menus.foods)}`;
    });
  },
};

export default DetailPage;

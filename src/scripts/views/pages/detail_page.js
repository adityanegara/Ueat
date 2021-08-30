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
      this._giveReview();
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
  _giveReview() {
    const NO_NAME_WARNING = 'Name Field is Required!';
    const NO_REVIEW_WARNING = 'Review Field is Required!';
    const FILLED_FIELD = 'Your Review Has Been Sent!';
    const reviewWarning = document.querySelector('.review-warning');
    const reviewWarningText = document.querySelector('.review-warning-text');
    const formReviewName = document.querySelector('#give-review-name');
    const formReviewReview = document.querySelector('#give-review-review');
    const formReviewButton = document.querySelector('.give-review-button');
    formReviewButton.addEventListener('click', () => {
      if (!formReviewName.value) {
        reviewWarning.classList.add('review-warning-danger');
        reviewWarning.classList.remove('review-warning-success');
        reviewWarningText.innerHTML = NO_NAME_WARNING;
        gsap.fromTo(reviewWarning, 0.5, { opacity: '0%' }, { opacity: '100%', ease: 'power1' });
      } else if (!formReviewReview.value) {
        reviewWarning.classList.add('review-warning-danger');
        reviewWarning.classList.remove('review-warning-success');
        reviewWarningText.innerHTML = NO_REVIEW_WARNING;
        gsap.fromTo(reviewWarning, 0.5, { opacity: '0%' }, { opacity: '100%', ease: 'power1' });
      } else {
        reviewWarning.classList.remove('review-warning-danger');
        reviewWarning.classList.add('review-warning-success');
        reviewWarningText.innerHTML = FILLED_FIELD;
        gsap.fromTo(reviewWarning, 0.5, { opacity: '0%' }, { opacity: '100%', ease: 'power1' });
      }
    });
  },
};

export default DetailPage;

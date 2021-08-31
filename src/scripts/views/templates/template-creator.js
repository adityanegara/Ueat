import CONFIG from '../../globals/config';

const createLoadingTemplate = () => `
    <div class ="loading">
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
    </div>
    `;

const _renderCategories = (categories) => {
  let categoriesElement = '';
  categories.forEach((category, i) => {
    if (i === categories.length - 1) {
      categoriesElement += `${category.name}`;
    } else {
      categoriesElement += `${category.name}, `;
    }
  });
  return categoriesElement;
};

const renderMenus = (menus) => {
  let menusElement = ``;
  menus.forEach((menu, i) => {
    menusElement += `<li tabindex="0">${i + 1}. ${menu.name}</li>`;
  });
  return menusElement;
};

const renderReviews = (reviews) => {
  let reviewsElement = ``;
  reviews.forEach((review) => {
    reviewsElement
    += `<div class="review">
      <div class="reviewer-avatar">
        <img tabindex="0" class="reviewer-avatar"  src="./img/avatar.svg" alt="reviewer-avatar">
      </div>
    
      <p tabindex="0" class="reviewer-review" >
        <span class="reviewer-name">${review.name}</span> :  
          ${review.review}
      </p>
      <p tabindex="0" class="reviewer-date">Reviewed at : ${review.date}</p>
  </div>`;
  });
  return reviewsElement;
};
const createDetailRestaurantTemplate = (restaurant) => `
    <div class="restaurant-detail-image">
      <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="restaurant detail image">
    </div>
    <div class="restaurant-detail-information">
      <div class="restaurant-detail-name">
        <p tabindex="0">${restaurant.name}</p>
      </div>
      <div class="restaurant-detail-description">
        <p tabindex="0">${restaurant.description}</p>
      </div>
      <div class="restaurant-detail-location">
        <div class="restaurant-detail-city">
          <p tabindex="0">
            City : ${restaurant.city}
          </p>
        </div>
        <div class="restaurant-detail-address">
          <p tabindex="0">
            Address : ${restaurant.address}
          </p>
        </div>
      </div>
      <div class="restaurant-detail-categories">
        <p tabindex="0">
          Categories : ${_renderCategories(restaurant.categories)}
        </p>
      </div>
    </div>
    <div class="restaurant-detail-menu">
      <div class="flex">
        <div class="restaurant-detail-menu-foods">
          <button id="foods-menu-button" aria-label="see foods button" class="active">See Foods</button>
        </div>
        <div class="restaurant-detail-menu-drinks">
          <button id="drinks-menu-button" aria-label="see drinks button">See Drinks</button>
        </div>
      </div>
    
      <div class="restaurant-detail-menu-list">
        <ul id="restaurant-detail-menu-container">
          ${renderMenus(restaurant.menus.foods)}
        </ul>
      </div>
    </div>
  
    <div class="restaurant-detail-reviews">
      <p tabindex="0" class="headline">Reviews</p>
      <div class="review-list">
        ${renderReviews(restaurant.customerReviews)}
      </div>
      <div class="form-group">
        <p tabindex="0">Give Review</p>
        <div class="review-warning  ">
          <p class="review-warning-text">Name field is required!</p>
        </div>
        <div class="form form-name">
          <input type="text" id="give-review-name" class="form__input" autocomplete="off" placeholder=" ">
          <label for="give-review-name" class="form__label">Name</label>
        </div>
        <div class="form form-review">
          <input type="text" id="give-review-review" class="form__input" autocomplete="off" placeholder=" ">
          <label for="give-review-review" class="form__label">Review</label>
        </div>
        <button aria-label="create review button" class="give-review-button">Create Review</button>
    </div>
    </div>
  `;

const createRestaurantTemplate = (restaurant) => `<div class="restaurant">
                <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
                alt="restaurant image ${restaurant.name}">
                <p tabindex="0"  class="restaurant-name">${restaurant.name}</p>
                <p tabindex="0"  class="restaurant-description">
                    ${restaurant.description}
                </p>
                <div class="flex">
                    <p tabindex="0" class="restaurant-rating">Rating : ${restaurant.rating}</p>
                    <p tabindex="0"   class="restaurant-city">City : ${restaurant.city}</p>
                </div> 
                <a class="restaurant-detail-link" href="${`/#/detail/${restaurant.id}`}">Detail</a>
            </div>`;

export {
  createLoadingTemplate,
  createRestaurantTemplate,
  createDetailRestaurantTemplate,
  renderMenus,
  renderReviews,
};

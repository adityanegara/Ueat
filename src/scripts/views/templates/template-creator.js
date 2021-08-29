import CONFIG from "../../globals/config";

const createLoadingTemplate = () => {
    return`
    <div class ="loading">
        <div class="round"></div>
        <div class="round"></div>
        <div class="round"></div>
    </div>
    `
}

const _renderCategories = (categories) =>{
  let categoriesElement = '';
  categories.forEach((category, i) => {
    if(i == categories.length-1){
      categoriesElement += `${category.name}`
    }else{
      categoriesElement += `${category.name}, `
    }
  });
  return categoriesElement;
}

const renderMenus = (menus) =>{
  let menusElement = ``;
  menus.forEach((menu, i) => {
    menusElement +=  `<li>${i+1}. ${menu.name}</li>`
  });
  return menusElement;
}

const _renderReviews = (reviews) =>{
  let reviewsElement = ``;
  reviews.forEach(review => {
    reviewsElement += 
    `<div class="review">
      <div class="reviewer-avatar">
        <img class="reviewer-avatar"  src="./img/avatar.svg" alt="">
      </div>
    
      <p class="reviewer-review" >
        <span class="reviewer-name">${review.name}</span> :  
          ${review.review}
      </p>
      <p class="reviewer-date">Reviewed at : ${review.date}</p>
  </div>`
  });
  return reviewsElement;
}
const createDetailRestaurantTemplate = (restaurant) =>{
    return `
    <div class="restaurant-detail-image">
      <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="">
    </div>
    <div class="restaurant-detail-information">
      <div class="restaurant-detail-name">${restaurant.name}</div>
      <div class="restaurant-detail-description">
       ${restaurant.description}
      </div>
      <div class="restaurant-detail-location">
        <div class="restaurant-detail-city">City : ${restaurant.city}</div>
        <div class="restaurant-detail-address">Address : ${restaurant.address}</div>
      </div>
      <div class="restaurant-detail-categories">
        Categories : ${_renderCategories(restaurant.categories)}
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
      <p class="headline">Reviews</p>
      <div class="review-list">
        ${_renderReviews(restaurant.customerReviews)}
      </div>
   
    </div>
  `
}

const createRestaurantTemplate = (restaurant) =>{
    return`<div class="restaurant">
                <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
                alt="restaurant image ${restaurant.name}">
                <p class="restaurant-name">${restaurant.name}</p>
                <p class="restaurant-description">
                    ${restaurant.description}
                </p>
                <div class="flex">
                    <p class="restaurant-rating">Rating : ${restaurant.rating}</p>
                    <p class="restaurant-city">City : ${restaurant.city}</p>
                </div> 
                <a class="restaurant-detail-link" href="${`/#/detail/${restaurant.id}`}">Detail</a>
            </div>`
}

export {
    createLoadingTemplate,
    createRestaurantTemplate,
    createDetailRestaurantTemplate,
    renderMenus
}
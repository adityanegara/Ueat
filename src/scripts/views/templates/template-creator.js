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
    createRestaurantTemplate
}
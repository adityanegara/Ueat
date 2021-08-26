import {animateLoading} from '../../utils/page-animation';
import RestaurantSource from '../../model/restaurant-source';
import { createRestaurantTemplate,  createLoadingTemplate} from '../templates/template-creator';
const ExplorePage = {
    async render(){
        return `
        <div class ="restaurants-list">
        </div>
        `
    },

    async afterRender(){
        const restaurantsContainer = document.querySelector('.restaurants-list');
        restaurantsContainer.innerHTML = createLoadingTemplate();
        animateLoading();
        const restaurants = await RestaurantSource.restaurantList();
        console.log(restaurants)
        if(restaurants){
            restaurantsContainer.innerHTML = '';
            restaurants.forEach((restaurant) => {
                restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
              });
        }
    }
}

export default ExplorePage;
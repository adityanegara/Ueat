import {animateLoading} from '../../utils/page-animation';
import RestaurantSource from '../../model/restaurant-source';
const ExplorePage = {
    async render(){
        return `
        <div class ="loading">
            <div class="round"></div>
            <div class="round"></div>
            <div class="round"></div>
           
        </div>`
    },

    async afterRender(){
        animateLoading();
        const restaurants = await RestaurantSource.restaurantList();
        if(restaurants){
            console.log(restaurants);
        }
    }
}

export default ExplorePage;
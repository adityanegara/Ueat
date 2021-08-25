import {animateLoading} from '../../utils/page-animation';
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
    }
}

export default ExplorePage;
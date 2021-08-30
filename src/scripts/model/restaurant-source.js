import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantSource {
  static async restaurantList() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      return false;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  static async reviewRestaurant(id, name, review) {
    try {
      const rawResponse = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'X-AUTH-TOKEN': CONFIG.KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, name, review }),
      });
      const content = await rawResponse.json();
      return content.customerReviews;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default RestaurantSource;

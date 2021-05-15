import {Api} from "./api";
import {loadFavourtiesData} from "../store/FavouritesStore";

export class FavouriteApi {
    static async getFavourites() {
        let data = await Api.get(`${Api.baseUrl}/favourites?page=0&size=100`, true, null)
        loadFavourtiesData(data);
        return data;
    }
    static async postFav(id) {
        let data = Api.post(`${Api.baseUrl}/favourites/${id}/`,true,null,null)
        return data
    }
    static async deleteFav(id) {
        let result = Api.delete(`${Api.baseUrl}/favourites/${id}/`,true,null)
        return result;
    }
}
import {Api} from "./api";
import {loadFavouritesData} from "../store/FavouritesStore";

export class FavouriteApi {
    static async getFavourites(page) {
        let data = await Api.get(`${Api.baseUrl}/favourites?page=${page}&size=16`, true, null)
        loadFavouritesData(data);
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
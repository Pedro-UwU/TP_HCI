import {Api} from "./api";
import {loadCategoryData} from "../store/CategoryStore";

export class CategoryApi {
    static async postCategory(name) {
        let data = {
            name: name,
            detail: ""
        }
        let result = Api.post(`${Api.baseUrl}/categories`,true,data,null)
        return result;
    }

    static async getCategories(){
        let data = await Api.get(`${Api.baseUrl}/categories?page=0&size=10&orderBy=name&direction=asc`,true,null)
        loadCategoryData(data);
        return data;
    }

    static async getCategory(id){
        let data = await Api.get(`${Api.baseUrl}/categories/${id}`,true,null)
        return data;
    }
}
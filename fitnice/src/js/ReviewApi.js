import {Api} from "./api";

export  class ReviewApi {
    static async postReview(score, id) {
        let review = { score: score , review: ""}
        let result = Api.post(`${Api.baseUrl}/reviews/${id}`,true,review,null)
        return result;
    }

    static async deleteReview(id) {
        let result = Api.post(`${Api.baseUrl}/reviews/${id}/`,true,null)
        return result;
    }

}
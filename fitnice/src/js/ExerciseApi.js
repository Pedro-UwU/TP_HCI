import {exerciseType} from "../store/Exercise";
import {Api} from "./api";

export {ExerciseApi}
class ExerciseApi {
    static async addExercise(exercise) {
        let data = {
            name: exercise.name,
            detail: exercise.detail,
            type: (exercise.type === exerciseType.EXERCISE) ? "exercise" : "rest",
            metadata: null
        }
        let result = Api.post(`${Api.baseUrl}/exercises`, true, data, null);
        console.log(result);
        return result
    }

    static async getExercises(page, itemsPerPage) {
        let result = Api.get(`${Api.baseUrl}/exercises?page=${page}&size=${itemsPerPage}&orderBy=id&direction=desc`, true, null);
        return result;
    }

    static async editExercise(exercise) {
        let data = {
            name: exercise.name,
            detail: exercise.detail,
            type: (exercise.type === exerciseType.EXERCISE) ? "exercise" : "rest",
            metadata: null
        }
        let result = Api.put(`${Api.baseUrl}/exercises/${exercise.id}`,true,data,null);
        console.log(result);
        return result
    }

    static async deleteExercise(id) {
        let result = Api.delete(`${Api.baseUrl}/exercises/${id}`, true, null)
        console.log(result);
        return result
    }

    static async searchExercises(query) {
        query
    }
}
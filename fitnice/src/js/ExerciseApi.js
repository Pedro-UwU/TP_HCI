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
}
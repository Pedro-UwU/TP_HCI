import {Api} from "./api";

export class RoutineApi {
    static async createRoutine(routine) {
        let data = {
            name: routine.name,
            detail: routine.detail,
            isPublic: routine.isPublic,
            difficulty: routine.difficulty,
            category: routine.category,
            metadata: null
        }
        let result = Api.post(`${Api.baseUrl}/routines`, true, data, null)
        console.log("RoutineApi.js" + result);
        return result
    }

    static async getRoutine(id) {
        let result = Api.get(`${Api.baseUrl}/routines/${id}`, true, null)
        console.log("RoutineApi.js", result)
        return result
    }

    static async getRoutines() {
        // let result = Api.get(`${Api.baseUrl}/routines`)
    }

    static async deleteRoutine(id) {
        let result = Api.delete(`${Api.baseUrl}/routines/${id}`, true, null)
        console.log("RoutineApi.js" + result)
        return result
    }
}

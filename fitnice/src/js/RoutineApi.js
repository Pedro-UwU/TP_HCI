import {Api} from "./api";
import {loadRoutinesData} from "../store/RoutineStore";

export class RoutineApi {
    static async createRoutine(routine) {
        routine.category.id = parseInt(routine.category.id)
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

    static async getRoutines(page,size,orderby,direction) {
        let data = await Api.get(`${Api.baseUrl}/routines?page=${page}&size=${size}&orderBy=${orderby}&direction=${direction}`,true, null)
        loadRoutinesData(data);
        return data
    }

    static async deleteRoutine(id) {
        let result = Api.delete(`${Api.baseUrl}/routines/${id}`, true, null)
        console.log("RoutineApi.js" + result)
        return result
    }

    static async modifyRoutine(id, routine) {
        console.log(routine.category)
        id = parseInt(id)
        let data = {
            name: routine.name,
            detail: routine.detail,
            isPublic: routine.isPublic,
            difficulty: routine.difficulty,
            category: routine.category,
            metadata: null
        }
        let result = Api.put(`${Api.baseUrl}/routines/${id}`,true, data, null);
        return result;
    }
}

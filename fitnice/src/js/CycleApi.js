import {Api} from "./api";

export class CycleApi {
    static async addCycle(cycle) {
        let data = {
            name: cycle.name,
            detail: cycle.detail,
            type: cycle.type,
            order: cycle.order,
            repetitions: cycle.repetitions,
            metadata: null
        }
        let result = Api.post(`${Api.baseUrl}/routines/${cycle.routineId}/cycles`, true, data, null);
        console.log("CycleApi.js" + result)
        return result
    }

    static async deleteCycle(routineId, cycleId) {
        let result = Api.delete(`${Api.baseUrl}/routines/${routineId}/cycles/${cycleId}`)
        console.log("CycleApi.js" + result)
        return result
    }
    static async addExerciseToCycle(cycleId, exerciseId, order, duration, repetitions) {
        let data = {
            order: order,
            duration: parseInt(duration),
            repetitions: parseInt(repetitions)
        }
        console.log(exerciseId)
        let result = Api.post(`${Api.baseUrl}/cycles/${cycleId}/exercises/${exerciseId}`, true, data, null)
        return result
    }

    static async removeExerciseFromCycle(cycleId, exerciseId) {
        let result = Api.delete(`${Api.baseUrl}/cycles/${cycleId}/exercises/${exerciseId}`)
        return result
    }

    static async getCyclesFromRoutine(routineId) {
        let result = Api.get(`${Api.baseUrl}/routines/${routineId}/cycles`, true, null)
        return result
    }

    static async geExercisesFromCycle(cycleId) {
        console.log("CycleID: " + cycleId)
        let result = Api.get(`${Api.baseUrl}/cycles/${parseInt(cycleId)}/exercises?page=0&size=10000&orderBy=order&direction=asc`,false,null)
        console.log(result);
        return result
    }
}
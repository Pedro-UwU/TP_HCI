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
}
// import {RoutineApi} from "../js/RoutineApi";

export const RoutineStore = {
    routines: null,
    data: null,
}

export function loadRoutinesData(data) {
    RoutineStore.routines = data.content;
    RoutineStore.data = data;
}
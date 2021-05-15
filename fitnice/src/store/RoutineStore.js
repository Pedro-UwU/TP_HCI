export const RoutineStore = {
    routines: null
}

export function loadRoutinesData(data) {
    RoutineStore.routines = data.content;
}
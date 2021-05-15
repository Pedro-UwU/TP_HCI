export const MyRoutineStore = {
    routines: null
}

export function loadMyRoutinesData(data) {
    MyRoutineStore.routines = data.content;
}
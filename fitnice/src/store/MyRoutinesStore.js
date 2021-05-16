export const MyRoutineStore = {
    routines: null,
    data: null
}

export function loadMyRoutinesData(data) {
    MyRoutineStore.routines = data.content;
    MyRoutineStore.data = data
}
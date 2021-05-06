class ExerciseStore {
    constructor() {
        this.exercises = [{ name: 'Zeus', format: 'Repeticiones', amount: 10, category: 'Espalda' ,description:""},
            { name: 'Athena', format: 'Tiempo (s)', amount: 30, category: 'Piernas' ,description:""},
            { name: 'Hades', format: 'Tiempo (s)', amount: 40, category: 'Abdominales' ,description:""}];
    }

    // exercises: [
    //     { name: 'Zeus', format: 'Repeticiones', amount: 10, category: 'Espalda' ,description:""},
    //     { name: 'Athena', format: 'Tiempo (s)', amount: 30, category: 'Piernas' ,description:""},
    //     { name: 'Hades', format: 'Tiempo (s)', amount: 40, category: 'Abdominales' ,description:""}
    // ],

    add(exercise) {
        this.exercises.push(exercise);
    }

    remove(exercise) {
        let index = this.exercises.findIndex(i => (i === exercise));
        if (index === -1)
            return false;

        this.exercises.splice(index, 1);
    }

    get(index) {
        if (index > this.exercises.length) {
            return null;
        }
        return this.exercises[index];
    }
}

const ExerciseStoreEx = new ExerciseStore();
export default ExerciseStore;
export {ExerciseStoreEx};
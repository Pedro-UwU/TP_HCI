import Exercise from "./Exercise";

class ExerciseStore {
    constructor() {
        this.exercises = [];
    }

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

export {ExerciseStoreEx};
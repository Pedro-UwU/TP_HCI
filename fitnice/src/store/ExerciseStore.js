class ExerciseStore {
    constructor() {
        this.exercises = [
            new Exercise('Zeus','Tiempo (s)',25,'Piernas',"classeee"),
            new Exercise('Juan','Repeticiones',40,'Piernas',"fasndvhf"),
            new Exercise('Poseidon','Tiempo (s)',20,'Piernas',"fnasd"),
            new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado")
        ];
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

import Exercise from "./Exercise";

const ExerciseStoreEx = new ExerciseStore();
export default ExerciseStore;
export {ExerciseStoreEx};
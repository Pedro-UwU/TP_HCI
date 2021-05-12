import Exercise, {exerciseType} from "./Exercise";

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
ExerciseStoreEx.add(new Exercise('Zeus','Cosas con pesas', exerciseType.EXERCISE));
ExerciseStoreEx.add(new Exercise('Zeus2','Cosas con pesas', exerciseType.EXERCISE));
ExerciseStoreEx.add(new Exercise('Zeus3','Cosas con pesas', exerciseType.EXERCISE));
ExerciseStoreEx.add(new Exercise('Zeus4','Cosas con pesas', exerciseType.EXERCISE));

export default ExerciseStore;
export {ExerciseStoreEx};

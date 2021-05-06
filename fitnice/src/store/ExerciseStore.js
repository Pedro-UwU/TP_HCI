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
ExerciseStoreEx.add(new Exercise('Zeus','Tiempo (s)',25,'Piernas',"classeee"));
ExerciseStoreEx.add(new Exercise('Juan','Repeticiones',40,'Piernas',"fasndvhf"));
ExerciseStoreEx.add(new Exercise('Poseidon','Tiempo (s)',20,'Piernas',"fnasd"));
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))
ExerciseStoreEx.add(new Exercise('Zsd','Tiempo (s)',10,'Piernas',"concentrado"))

export default ExerciseStore;
export {ExerciseStoreEx};
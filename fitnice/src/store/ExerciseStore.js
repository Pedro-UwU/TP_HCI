export default class ExerciseStore {
    constructor() {
        this.exercises = [];
    }

    // exercises: [
    //     { name: 'Zeus', format: 'Repeticiones', amount: 10, category: 'Espalda' ,description:""},
    //     { name: 'Athena', format: 'Tiempo (s)', amount: 30, category: 'Piernas' ,description:""},
    //     { name: 'Hades', format: 'Tiempo (s)', amount: 40, category: 'Abdominales' ,description:""}
    // ],

    add(name,format, amount, category, description) {
        this.exercises.push(new Exercise(name,format, amount, category, description));
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

class Exercise {
    constructor(name,format, amount, category, description) {
        this.name = name;
        this.format = format;
        this.amount = amount;
        this.category = category;
        this.description = description;
    }
}

const ExerciseStoreEx = new ExerciseStore();

export {ExerciseStoreEx};
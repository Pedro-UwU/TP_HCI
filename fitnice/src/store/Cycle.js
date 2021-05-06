import ExerciseStore from "./ExerciseStore";

export default class Cycle extends ExerciseStore{
    constructor(name, repetitions) {
        super();
        this.name = name;
        this.repetitions = repetitions;
    }
}
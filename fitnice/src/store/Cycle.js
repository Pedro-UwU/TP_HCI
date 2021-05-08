import ExerciseStore from "./ExerciseStore";

export default class Cycle extends ExerciseStore{
    static idCount = 0;
    constructor(name, repetitions) {
        super();
        this.id = Cycle.idCount;
        Cycle.idCount++;
        this.name = name;
        this.repetitions = repetitions;
    }
}
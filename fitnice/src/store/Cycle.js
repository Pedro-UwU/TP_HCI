export default class Cycle{

    constructor(name, type, order, repetitions) {
        this.name = name;
        this.detail = "";
        this.type = type;
        this.order = order;
        this.repetitions = repetitions;
        this.routineId = -1;
        this.id = -1;
    }
}

export const CycleTypes = {
    warmup: "Calentamiento",
    cooldown: "Enfriamiento",
    exercise: "Ejercitación"
}
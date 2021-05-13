export default class Cycle{
    // static idCount = 0;
    // constructor(name, repetitions) {
    //     super();
    //     this.id = Cycle.idCount;
    //     Cycle.idCount++;
    //     this.name = name;
    //     this.repetitions = repetitions;
    // }

    constructor(name, detail, type, order, repetitions, routineId, id) {
        this.name = name;
        this.detail = detail;
        this.type = type;
        this.order = order;
        this.repetitions = repetitions;
        this.routineId = routineId;
        this.id = id;
    }
}
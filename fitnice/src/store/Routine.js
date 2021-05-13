export default class Routine {
    // static idCount = 0;
    // constructor(name, category, difficulty, duration) {
    //     this.id = Routine.idCount;
    //     Routine.idCount++;
    //     this.name = name;
    //     this.category = category;
    //     this.difficulty = difficulty;
    //     this.duration =  duration;
    //     this.cycles = [];
    //     this.isPublic = true;
    //     this.description = '';
    // }
    //
    // // constructor(name, detail, isPublic, ) {
    // // }
    //
    // addCycle(cycle) {
    //     this.cycles.push(cycle);
    // }
    //
    // removeCycle(cycle) {
    //     this.cycles.splice(this.cycles.indexOf(cycle), 1);
    // }
    //
    // setDescription(desc) {
    //     this.description = desc;
    // }
    //
    // getIDCount() {
    //     return Routine.idCount
    // }
    constructor(name, detail, isPublic, difficulty, category, id) {
        this.id = id;
        this.name = name;
        this.detail = detail;
        this.isPublic = isPublic;
        this.difficulty = difficulty;
        this.category = category;
    }
}
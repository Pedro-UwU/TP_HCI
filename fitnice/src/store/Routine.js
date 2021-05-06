export default class Routine {
    constructor(name, category, difficulty, duration) {
        this.name = name;
        this.category = category;
        this.difficulty = difficulty;
        this.duration =  duration;
        this.cycles = [];
    }

    addCycle(cycle) {
        this.cycles.push(cycle);
    }

    removeCycle(cycle) {
        this.cycles.splice(this.cycles.indexOf(cycle), 1);
    }
}
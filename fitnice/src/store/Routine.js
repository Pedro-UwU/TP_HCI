export default class Routine {
    constructor(name, category, difficulty, duration) {
        this.name = name;
        this.category = category;
        this.difficulty = difficulty;
        this.duration =  duration;
        this.warmUp = null;
        this.coolDown = null;
        this.cycles = [];
    }

    addCycle(cycle) {
        this.cycles.push(cycle);
    }

    removeCycle(cycle) {
        this.cycles.splice(this.cycles.indexOf(cycle), 1);
    }

    addCoolDown(cycle) {
        this.coolDown = cycle;
    }

    addWarmUp(cycle) {
        this.warmUp = cycle;
    }
}
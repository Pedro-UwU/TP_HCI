import Routine from "./Routine";
import Cycle from "./Cycle";
import Exercise from "./Exercise";

export default class RoutineStore {
    constructor() {
        this.routines = [];
    }

    add(routine) {
        this.routines.push(routine);
    }

    remove(routine) {
        let index = this.routines.findIndex(i => (i === routine));
        if (index === -1)
            return false;

        this.routines.splice(index, 1);
    }

    get(index) {
        if (index > this.routines.length) {
            return null;
        }
        return this.routines[index];
    }
}

const RoutineStoreEx = new RoutineStore();
let routine1 = new Routine("rutina 1","Brazos","Dificil",12);
let cycle1 = new Cycle('primer ciclo','5');
let ex1 = new Exercise('ej 1','fsdafds','3','fdsa','fsdsvf');RoutineStoreEx.add(routine1);
cycle1.add(ex1);
routine1.addCycle(cycle1);
RoutineStoreEx.add(new Routine("rutina 2","Brazos","Dificil",12))
RoutineStoreEx.add(new Routine("rutina 3","Brazos","Dificil",12))
export {RoutineStoreEx};
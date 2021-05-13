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
export {RoutineStoreEx};
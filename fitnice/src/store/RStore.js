import {RoutineApi} from "../js/RoutineApi";
import {CycleApi} from "../js/CycleApi";

export const RStore = {
    currentRoutine: null,
    currentCycles: [],
    cycleExercises: [], //Tiene cosas del estilo {cycleOrder: , ex: [{exercise, repetitions, duration, order}]}}

    createRoutine() {
        //Primero Creo la Rutina
        RoutineApi.createRoutine(this.currentRoutine).then(res => {
            if (res.id === undefined) throw 'Error, no se pudo crear la rutina'
            for (let i = 0; i < this.currentCycles.length; i++) {
                this.currentCycles[i].routineId = res.id;
                //Ahora creamos el ciclo atachado a la rutina
                CycleApi.addCycle(this.currentCycles[i]).then(res => {
                    if (res.id === undefined) 'Error, no se pudo agregar el ciclo'
                    for (let j = 0; j < this.cycleExercises[i].exercises.length; j++) {
                        //Aca agrego el ejercicio
                        console.log(JSON.stringify(this.cycleExercises[i]))
                        console.log(this.cycleExercises[i].exercises[j].exercise.type);
                        CycleApi.addExerciseToCycle(res.id,this.cycleExercises[i].exercises[j].exercise.id,this.cycleExercises[i].exercises[j].order, this.cycleExercises[i].exercises[j].duration,this.cycleExercises[i].exercises[j].repetitions)
                    }
                })
            }
            console.log(res)
        })
        console.log("All Ok");
    }
}
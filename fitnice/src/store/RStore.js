import {RoutineApi} from "../js/RoutineApi";
import {CycleApi} from "../js/CycleApi";
import Routine from "./Routine";
import Cycle from "./Cycle";
import {router} from "../main";

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
                this.currentCycles[i].repetitions = parseInt(this.currentCycles[i].repetitions);
                //Ahora creamos el ciclo atachado a la rutina
                CycleApi.addCycle(this.currentCycles[i]).then(res => {
                    if (res.id === undefined) 'Error, no se pudo agregar el ciclo'
                    for (let j = 0; j < this.cycleExercises[i].exercises.length; j++) {
                        //Aca agrego el ejercicio
                        console.log(JSON.stringify(this.cycleExercises[i]))
                        console.log(this.cycleExercises[i].exercises[j].exercise.type);
                        this.cycleExercises[i].exercises[j].exercise.duration = parseInt(this.cycleExercises[i].exercises[j].exercise.duration)
                        this.cycleExercises[i].exercises[j].exercise.repetitions = parseInt(this.cycleExercises[i].exercises[j].exercise.repetitions)
                        CycleApi.addExerciseToCycle(res.id,this.cycleExercises[i].exercises[j].exercise.id,this.cycleExercises[i].exercises[j].order, this.cycleExercises[i].exercises[j].duration,this.cycleExercises[i].exercises[j].repetitions)
                    }
                })
            }
        })
        console.log("All Ok");
    },


    async loadRoutine(id) {
        this.currentRoutine = null
        this.currentCycles = []
        this.cycleExercises = []
        try {
            let result = RoutineApi.getRoutine(id).then(res => {
                if(res.id === undefined) console.log()
                this.currentRoutine = new Routine(res.name, res.detail, res.isPublic, res.difficulty, res.category, res.id);
                CycleApi.getCyclesFromRoutine(res.id).then(cRes => {
                    for (let i = 0; i < cRes.content.length; i++) {
                        this.currentCycles.push(new Cycle(cRes.content[i].name, cRes.content[i].type, cRes.content[i].order, cRes.content[i].repetitions))
                        this.currentCycles[i].routineId = res.id;
                        this.currentCycles[i].id =cRes.content[i].id
                        this.cycleExercises.push({cycleOrder: cRes.content[i].order, exercises:[]})
                        CycleApi.getExercisesFromCycle(cRes.content[i].id).then(eRes => {
                            for (let j = 0; j < eRes.content.length; j++) {
                                this.cycleExercises[i].exercises.push(eRes.content[i])
                            }
                        });
                    }
                })
            })
            return result;
        } catch (e) {
            console.log(e)
            router.push('/NotFound')
        }
    }
}
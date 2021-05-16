import {RoutineApi} from "../js/RoutineApi";
import {CycleApi} from "../js/CycleApi";
import Routine from "./Routine";
import Cycle from "./Cycle";
import {router} from "../main";
import {UserApi} from "../js/user";

export const RStore = {
    currentRoutine: null,
    currentCycles: [],
    cycleExercises: [], //Tiene cosas del estilo {cycleOrder: , ex: [{exercise, repetitions, duration, order}]}}
    cycleOrder: 0,

    createRoutine() {
        //Primero Creo la Rutina
        RoutineApi.createRoutine(this.currentRoutine).then(res => {
            if (res.id === undefined) throw 'Error, no se pudo crear la rutina'
            this.currentRoutine.id = res.id
            this.currentRoutine.userId = UserApi.getUserId();
            console.log(this.currentRoutine.userId);
            for (let i = 0; i < this.currentCycles.length; i++) {
                this.currentCycles[i].routineId = res.id;
                this.currentCycles[i].repetitions = parseInt(this.currentCycles[i].repetitions);
                //Ahora creamos el ciclo atachado a la rutina
                CycleApi.addCycle(this.currentCycles[i]).then(res => {
                    if (res.id === undefined) 'Error, no se pudo agregar el ciclo'
                    for (let j = 0; j < this.cycleExercises[i].exercises.length; j++) {
                        //Aca agrego el ejercicio
                        this.cycleExercises[i].exercises[j].exercise.duration = parseInt(this.cycleExercises[i].exercises[j].exercise.duration)
                        this.cycleExercises[i].exercises[j].exercise.repetitions = parseInt(this.cycleExercises[i].exercises[j].exercise.repetitions)
                        CycleApi.addExerciseToCycle(res.id,this.cycleExercises[i].exercises[j].exercise.id,this.cycleExercises[i].exercises[j].order, this.cycleExercises[i].exercises[j].duration,this.cycleExercises[i].exercises[j].repetitions)
                    }
                })
            }
        })

    },

    translateCycleCat(type){
        switch (type) {
            case 'exercise':
                return 'Ejercicio'
            case 'warmup':
                return 'Calentamiento'
            case 'cooldown':
                return 'Enfriamiento'
        }
    },

    async loadRoutine(id) {
        this.currentRoutine = null
        this.currentCycles = []
        this.cycleExercises = []
        try {
            let result = RoutineApi.getRoutine(id).then(res => {
                if(res.id === undefined) console.log()
                this.currentRoutine = new Routine(res.name, res.detail, res.isPublic, res.difficulty, res.category, res.id);
                this.currentRoutine.userId = res.user.id;
                console.log(this.currentRoutine.userId);
                CycleApi.getCyclesFromRoutine(res.id).then(cRes => {
                    for (let i = 0; i < cRes.content.length; i++) {
                        this.currentCycles.push(new Cycle(cRes.content[i].name, this.translateCycleCat(cRes.content[i].type), cRes.content[i].order, cRes.content[i].repetitions))
                        this.currentCycles[i].routineId = res.id;
                        this.currentCycles[i].id =cRes.content[i].id
                        this.cycleExercises.push({cycleOrder: cRes.content[i].order, exercises:[]})
                        CycleApi.getExercisesFromCycle(cRes.content[i].id).then(eRes => {
                            for (let j = 0; j < eRes.content.length; j++) {
                                this.cycleExercises[i].exercises.push(eRes.content[j])
                            }
                        });
                    }
                })
            })
            this.cycleOrder=this.currentCycles.length
            return result;
        } catch (e) {
            console.log(e)
            router.push('/NotFound')
        }
    },

    async cleanRoutine(id) {
        if (this.currentRoutine.id !== id) {
            console.log("Current Routine: " + this.currentRoutine.id + ", id: " + id)
            throw 'Debes modificar la rutina con el mismo ID'
        }
        CycleApi.getCyclesFromRoutine(id).then(cyclesToDelete => {
            for (let i = 0; i < cyclesToDelete.content.length; i++) {
                CycleApi.getExercisesFromCycle(cyclesToDelete.content[i].id).then(exercisesToDelete => {
                    for (let j = 0; j < exercisesToDelete.content.length; j++) {
                        CycleApi.removeExerciseFromCycle(cyclesToDelete.content[i].id, exercisesToDelete.content[j].exercise.id);
                    }
                })
                CycleApi.deleteCycle(id, cyclesToDelete.content[i].id);
            }
        })
    },
    modifyRoutine(id){
        //Primero modifico la rutina
        if (RStore.currentRoutine.id !== id) {
            console.log("Current Routine: " + this.currentRoutine.id + ", id: " + id)
            throw 'Debes modificar la rutina con el mismo ID'
        }
        console.log("current rutine" + RStore.currentRoutine.id)
        this.currentRoutine.userId = UserApi.getUserId();
        console.log("capaz llego1")
        RoutineApi.modifyRoutine(id, RStore.currentRoutine).then(res => {
            console.log(RStore.currentCycles.length+ "aca");
            for (let i = 0; i < RStore.currentCycles.length; i++) {
                RStore.currentCycles[i].routineId = res.id;
                RStore.currentCycles[i].repetitions = parseInt(RStore.currentCycles[i].repetitions);
                CycleApi.addCycle(RStore.currentCycles[i]).then(res => {
                    console.log("Llego a A")
                    if (id === undefined) 'Error, no se pudo agregar el ciclo'
                    for (let j = 0; j < this.cycleExercises[i].exercises.length; j++) {
                        //Aca agrego el ejercicio
                        this.cycleExercises[i].exercises[j].exercise.duration = parseInt(this.cycleExercises[i].exercises[j].exercise.duration)
                        this.cycleExercises[i].exercises[j].exercise.repetitions = parseInt(this.cycleExercises[i].exercises[j].exercise.repetitions)
                        CycleApi.addExerciseToCycle(res.id,this.cycleExercises[i].exercises[j].exercise.id,this.cycleExercises[i].exercises[j].order, this.cycleExercises[i].exercises[j].duration,this.cycleExercises[i].exercises[j].repetitions)
                        console.log("Llego a B")
                    }
                })
            }
        }).then(()=>{
            // router.push(`/check?RId=${id}`)
        }).catch((e) => {
            console.log("ASDASDDS", e)
        })
    }
}
import Exercise, {exerciseType} from "./Exercise";
import {ExerciseApi} from "../js/ExerciseApi";

export const ExerciseStore = {
    exercises: [],
    page: 0,
    itemsPerPage: 15,
    reload() {
        ExerciseApi.getExercises(this.page, this.itemsPerPage).then(res => {
            if (res.content.length === 0 && this.page > 0) {
                this.page--;
            } else {
                this.exercises = []
                for (let i = 0; i < res.content.length; i++) {
                    let exInfo = res.content[i];
                    let type = (exInfo.type === 'exercise') ? exerciseType.EXERCISE : exerciseType.REST;
                    let newEx = new Exercise(exInfo.name, exInfo.detail, type, exInfo.id);
                    this.exercises.push(newEx)
                }
            }
            console.log('Reloaded')
        })
    }
}

<template>
  <div >
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            v-if="exercise===undefined"
            class="transparent white--text"
            :plain="true"
            color="white"
            :ripple="false"
            v-bind="attrs"
            v-on="on"
            @click="infoEx.name= '';
                infoEx.format= '';
                infoEx.amount= null;
                infoEx.category= '';
                infoEx.description= '';"
        >
          Crear Ejercicio
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn v-else
               v-bind="attrs"
               v-on="on"
               small
               icon
               solo
               plain
               @click="loadExercise()"
        >
          <v-icon color="grey">mdi-pencil-outline</v-icon>
        </v-btn>
      </template>
      <v-card class="white--text" color="primary">
        <v-card-title>
          <span v-if="exercise===undefined" class="headline">Creacion de ejercicio</span>
          <span v-else class="headline">Editar ejercicio</span>
        </v-card-title>
        <v-card-text class="white--text">
          <v-form v-model="isValid">
            <v-row>
              <v-col
                  cols="6"
              >
                <v-text-field
                    :solo="true"
                    label="Nombre de ejercicio*"
                    v-model="infoEx.name"
                    :rules="[v => !!v || 'campo obligatorio']"
                    required
                    background-color="tertiary"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-select
                    :items="[exerciseType.EXERCISE, exerciseType.REST]"
                    label="Tipo"
                    :rules="[v => !!v || 'campo obligatorio']"
                    v-model="infoEx.type"
                    required
                    solo
                    background-color="tertiary"
                ></v-select>
              </v-col>
              <v-col
                  cols="12"
              >
                <v-textarea
                    class="my-n7"
                    height="150px"
                    label="descripcion"
                    solo
                    v-model="infoEx.detail"
                    name="descripcion"
                    background-color="tertiary"
                ></v-textarea>
              </v-col>
            </v-row>
          <small>(*) campo obligatorio</small>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog=false;"
          >
            Cerrar
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              :disabled="!isValid"
              @click="dialog = false;
                addExercise();"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {ExerciseStoreEx} from "../store/ExerciseStore";
import Exercise, {exerciseType} from "../store/Exercise";
import {isNumber} from "../js/NumberLib";

export default {
  name: "ExcercisePopUp",
  data: () => ({
    exerciseType: exerciseType,
    dialog: false,
    isValid: true,
    infoEx: {
      name: "",
      type: "",
      detail: "",
    },
    store: ExerciseStoreEx
  }),
  props: {
    exercise: Exercise
  },
  methods: {
    addExercise() {
      if (!this.exercise)
        this.store.add(new Exercise(this.infoEx.name ,this.infoEx.detail,this.infoEx.type));
      else{
        this.exercise.name = this.infoEx.name;
        this.exercise.format = this.infoEx.format;
        this.exercise.amount = this.infoEx.amount;
        this.exercise.category = this.infoEx.category;
        this.exercise.description = this.infoEx.description;
      }
    },
    isNumber(evt) {
      return isNumber(evt)
    },
    loadExercise() {
      if (this.exercise){
        this.infoEx.name = this.exercise.name;
        this.infoEx.format = this.exercise.format;
        this.infoEx.amount = this.exercise.amount;
        this.infoEx.category = this.exercise.category;
        this.infoEx.description = this.exercise.description;
      }
    }
  }
}
</script>

<style scoped>

</style>
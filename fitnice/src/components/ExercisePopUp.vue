<template>
  <v-row justify="center" >
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            v-if="exercise===undefined"
            class="white--text"
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
        <v-icon
            v-else
            v-bind="attrs"
            v-on="on"
            small
            @click="loadExercise()"
        >
          mdi-pencil
        </v-icon>
      </template>
      <v-card class="white--text" color="primary">
        <v-card-title>
          <span class="headline">Creacion de ejercicio</span>
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
              <v-col
                  cols="2"
              >
                <v-text-field
                    :solo="true"
                    @keypress="isNumber(infoEx.amount)"
                    :rules="[v => !!v || 'campo obligatorio']"
                    label="N°"
                    v-model="infoEx.amount"
                    required
                    background-color="tertiary"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="4"
              >
                <v-select
                    :items="['Tiempo (s)', 'Repeticiones']"
                    :rules="[v => !!v || 'campo obligatorio']"
                    v-model="infoEx.format"
                    required
                    solo
                    background-color="tertiary"
                ></v-select>
              </v-col>
              <v-col
                  cols="12"
              >
                <v-text-field
                    class="mt-n7"
                    :solo="true"
                    label="Categoria"
                    v-model="infoEx.category"
                    :rules="[v => !!v || 'campo obligatorio']"
                    required
                    background-color="tertiary"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
              >
                <v-textarea
                    class="my-n7"
                    height="150px"
                    label="descripcion"
                    solo
                    v-model="infoEx.description"
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
            Close
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              :disabled="!isValid"
              @click="dialog = false;
                addExcercise();"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {ExerciseStoreEx} from "../store/ExerciseStore";
import Exercise from "../store/Exercise";

export default {
  name: "ExcercisePopUp",
  data: () => ({
    dialog: false,
    isValid: true,
    infoEx: {
      name: "",
      format: "",
      amount: null,
      category: "",
      description: "",
    },
    store: ExerciseStoreEx
  }),
  props: {
    exercise: Exercise
  },
  methods: {
    addExcercise() {
      if (!this.exercise)
        this.store.add(new Exercise(this.infoEx.name,this.infoEx.format,this.infoEx.amount,this.infoEx.category,this.infoEx.description));
      else{
        this.exercise.name = this.infoEx.name;
        this.exercise.format = this.infoEx.format;
        this.exercise.amount = this.infoEx.amount;
        this.exercise.category = this.infoEx.category;
        this.exercise.description = this.infoEx.description;
      }
    },
    isNumber(evt) {
      evt = (evt) ? evt : window.event;
      let charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
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
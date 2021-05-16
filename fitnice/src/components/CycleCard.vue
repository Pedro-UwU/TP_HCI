<template>
  <v-card class="secondary">
    <v-row class="align-center" justify="end">
      <v-col cols="3" class="subtitle-1 mt-4 mb-n3 ml-3">
        <v-text-field v-if="!nameEnabled || readOnly"
                      readonly
                      :value="cycle.name"
                      solo
                      dense
                      flat
                      background-color="transparent"
                      class="color-disabled text-h6"
                      v-model="cycle.name"
        >
        </v-text-field>
        <v-text-field v-else
                      :value="cycle.name"
                      solo
                      light
                      dense
                      flat
                      background-color="quinary"
                      class="color-enabled"
                      v-on:change="cycleNewName($event)"
        ></v-text-field>
      </v-col>
      <v-spacer/>
      <v-col>
        <v-select
            v-if="!readOnly"
            :items="['Calentamiento', 'Ejercicio', 'Enfriamiento']"
            v-model="cycle.type"
            label="Categoría"
            :menu-props="{ offsetY: true, transition: 'slide-y-transition', light: true, closeOnClick: true,
                    closeOnContentClick: true }"
            class="white--text"
            item-color="black"
            color="white"
        >
        </v-select>
        <v-text-field
            v-else
            readonly
            flat
            :items="['Calentamiento', 'Ejercicio', 'Enfriamiento']"
            v-model="cycle.type"
            background-color="transparent"
            label="Categoría"
        >
        </v-text-field>
      </v-col>
      <v-col cols="3" class="text-right mr-auto">
        <div class="text-h5 white--text align-center" >Repeticiones:</div>
      </v-col>
      <v-col cols="1" class="subtitle-1 mr-auto mt-4 mb-n3">
        <v-text-field v-if="!repetitionEnabled || readOnly"
                      disabled
                      :value="cycle.repetitions"
                      solo
                      dense
                      flat
                      background-color="transparent"
                      class="color-disabled"
                      v-model="cycle.repetitions"
        >
        </v-text-field>
        <v-text-field v-else
                      :value="cycle.repetitions"
                      solo
                      light
                      dense
                      flat
                      background-color="quinary"
                      class="color-enabled"
                      @keypress="isNumber($event)"
                      v-on:change="repetitionsValue($event)"
        ></v-text-field>
      </v-col>
      <v-col class="mr-auto">
        <v-row>
          <v-btn
                 v-if="!readOnly"
                 class="white--text transparent "
                 icon
                 solo
                 plain
                 :ripple="true"
                 @click="enabledModText();enableNameEdit()">
            <v-icon>
              mdi-pencil-outline
            </v-icon>
          </v-btn>
        <c-delete-cycle-pop-up v-if="!readOnly" :cycles="cycles" :cycle-exercises="cycleExercises" :cycle="cycle"/>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table class="elevation-1 secondary mx-3"
          :headers="(readOnly) ? readOnlyHeaders : headers"
          :items="cycleExercises"
          hide-default-footer
          v-model="selected"
          :sort-by="['order']"

          item-key="name"
        >
          <template v-slot:item.actions="{ item }">
            <v-row v-if="!readOnly">
              <v-btn
                  class="grey--text transparent"
                  small
                  solo
                  plain
                  icon
                  @click="moveDown(item.order-1)"
              ><v-icon>mdi-arrow-up</v-icon></v-btn>
              <v-btn
                  class="grey--text transparent"
                  small
                  solo
                  plain
                  icon
                  @click="moveUp(item.order-1)"
              ><v-icon>mdi-arrow-down</v-icon></v-btn>
              <c-delete-exercise-pop-up :store="cycleExercises" :exercise="item" :index="item.order - 1"/>
            </v-row>
          </template>
          <template v-slot:item.name="{ item }">
            <div class="text"> {{item.exercise.name }}</div>
          </template>
          <template v-slot:item.type="{ item }">
            <div class="text"> {{item.exercise.type }}</div>
          </template>
          <template v-slot:item.detail="{ item }">
            <div class="text"> {{item.exercise.detail }}</div>
          </template>
          <template v-slot:item.duration="{ item }">
              <v-row class="align-content-center">
                <v-col class="align-content-center">
                  <v-text-field v-if="!readOnly"
                    v-model="item.duration"
                    solo
                    dense
                    flat
                    filled
                    background-color="quinary"
                    class="color-enabled align-end mt-4 mb-n2"
                    @keypress="isNumber($event)"
                  >
                  </v-text-field>
                  <v-text-field v-else
                                v-model="item.duration"
                                readonly
                                solo
                                dense
                                flat
                                filled
                                background-color="transparent"
                                class="color-disabled align-end mt-4 mb-n2"
                                @keypress="isNumber($event)"
                  >
                  </v-text-field>


                </v-col>
            </v-row>
          </template>
          <template v-slot:item.repetitions="{ item }">
            <v-row class="align-content-center">
              <v-col class="align-content-center">
                <v-text-field
                    v-if="item.exercise.type !== 'Descanso' && item.exercise.type !== 'rest' && !readOnly"
                    v-model="item.repetitions"
                    solo
                    dense
                    flat
                    filled
                    background-color="quinary"
                    class="color-enabled align-end mt-4 mb-n2"
                    @keypress="isNumber($event)"
                />
                <v-text-field
                    v-if="item.exercise.type !== 'Descanso' && item.exercise.type !== 'rest' && readOnly"
                    v-model="item.repetitions"
                    readonly
                    solo
                    dense
                    flat
                    filled
                    background-color="transparent"
                    class="color-disabled align-end mt-4 mb-n2"
                    @keypress="isNumber($event)"
                />

              </v-col>
            </v-row>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer/>
      <c-add-exercise-pop-up v-if="!readOnly" :cycle="cycle" :cycle-content="cycleExercises" class="my-1"></c-add-exercise-pop-up>
    </v-row>
  </v-card>
</template>

<script>
import Cycle, {CycleTypes} from "../store/Cycle";
import AddExercisePopUp from "./AddExercisePopUp";
import {isNumber} from "../js/NumberLib";
import DeleteCyclePopUp from "./DeleteCyclePopUp";
// import ExercisePopUp from "./ExercisePopUp";
import DeleteExercisePopUp from "./DeleteExercisePopUp";

export default {
  name: "CycleCard",
  props: {
    cycle: Cycle,
    cycleExercises: Array,
    cycles: Array,
    readOnly: {type: Boolean, default: false}
  },
  data: () => {
    return {
      enabled: false,
      selected: [],
      repetitionEnabled: false,
      nameEnabled: false,
      CycleTypes: CycleTypes,
      headers: [
        {text: 'Orden', value: 'order', readOnlyShow: true},
        {text: 'Nombre', align: 'start'/*, filterable: true*/, value: 'name', sortable: false, readOnlyShow: true},
        {text: 'Categoría', value: 'type', sortable: false, readOnlyShow: true},
        {text: 'Descripción', value: 'detail', sortable: false, readOnlyShow: true},
        {text: 'Duración (seg)', value: 'duration', align: 'start',sortable: false, width:'10%', readOnlyShow: true},
        {text: 'Repeticiones', value: 'repetitions', align: 'start', sortable: false, width:'10%', readOnlyShow: true},
        {text: 'Acciones', value: 'actions', sortable: false, width: '10%', readOnlyShow: false}
      ]
    }
  },
  methods: {
    // translateCycleCategory(){
    //   let type = "exercise"
    //   if (cycle.type === 'Ejercicio') {
    //     type = 'exercise'
    //   } else if ( cycle.type === 'Calentamiento') {
    //     type = 'warmup'
    //   } else {
    //     type = 'cooldown'
    //   }
    // },
    isNumber(evt) {
      return isNumber(evt);
    },
    enabledModText() {
      this.repetitionEnabled = !this.repetitionEnabled;
    },
    repetitionsValue(newValue) {
      this.cycle.repetitions = parseInt(newValue);
    },
    cycleNewName(name) {
      this.cycle.name = name;
    },
    enableNameEdit() {
      this.nameEnabled = !this.nameEnabled;
    },
    moveDown(index) {
      if (index > 0) {
        this.cycleExercises[index].order--;
        this.cycleExercises[index-1].order++;
        let aux = this.cycleExercises[index];
        this.cycleExercises[index] = this.cycleExercises[index-1]
        this.cycleExercises[index-1] = aux;
      }
    },
    moveUp(index) {
      if (index < (this.cycleExercises.length-1)) {
        this.cycleExercises[index].order++;
        this.cycleExercises[index+1].order--;
        let aux = this.cycleExercises[index];
        this.cycleExercises[index] = this.cycleExercises[index+1]
        this.cycleExercises[index+1] = aux;
      }
    }
  },
  components: {
    CAddExercisePopUp: AddExercisePopUp,
    CDeleteCyclePopUp: DeleteCyclePopUp,
    CDeleteExercisePopUp: DeleteExercisePopUp
  },
  computed: {
    readOnlyHeaders () {
      return this.headers.filter(x=>x.readOnlyShow)
    }
  }
}
</script>

<style scoped>
.color-disabled >>> input {
  color: white;
}
.color-enabled >>> input {
  color: black;
}
.theme--light.v-list{
  background: #BDC3c7;
}
.theme--light.v-list-item:hover:before {
  opacity: 0.30;
}
</style>

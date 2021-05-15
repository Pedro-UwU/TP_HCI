<template>
  <v-app style="background: #192633">
    <c-header/>
    <v-container class="my-10">
      <v-row align="center" class="my-3">
        <div class=" white--text text-h3">
          Editar Rutina
        </div>
        <v-spacer/>
        <div @click.once="saveRoutine()">
          <v-btn
              solo
              plain
          >
            <v-icon left>mdi-content-save</v-icon>
            Guardar
          </v-btn>
        </div>
      </v-row>
      <v-row class="my-3 align-content-center">
        <v-col cols="4" class="align-center">
          <v-img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" aspect-ratio="1" width="90%" class="align-end borderRounded">
              <v-card class="transparent">
              <v-container class="bottom-image align-content-center">
              </v-container>
              </v-card>
          </v-img>
        </v-col>
        <v-col class="align-start">
          <v-list class="transparent">
            <v-container v-for="element in routineItems" :key="element.title">
              <v-row>
                <v-col cols="5" class=" transparent white--text font-weight-bold text-h6">{{ element.title }}</v-col>
                <v-spacer></v-spacer>
                <v-col cols="5" right class="transparent subtitle-1">
                  <v-text-field
                    :id="element.title"
                    v-model="element.content"
                    solo
                    dense
                    flat
                    background-color="quinary"
                    class="end-input color-enabled"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-divider class="white"></v-divider>
            </v-container>
          </v-list>
        </v-col>
      </v-row>
      <v-divider class="my-10"></v-divider>
      <v-row>
        <v-col>
          <div class=" white--text text-h4 mt-n5">
            Descripción
          </div>
          <v-textarea v-model="currentRoutine.detail" filled class="mb-n10 mt-5"/>
        </v-col>
      </v-row>
      <v-divider class="my-10"></v-divider>
      <v-row>
        <v-col>
          <div class=" white--text text-h4">
            Ciclos
          </div>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col class="align-center">
          <c-cycle-card class="my-5 align-center slide current movable"
                        v-for="cycle in cycles"
                        :cycles="cycles"
                        :cycle="cycle"
                        :key="cycle.name"
                        :cycle-exercises="store.cycleExercises[cycle.order-1].exercises"
          ></c-cycle-card>
        </v-col>
      </v-row>
      <v-row class = align-content-center>
        <v-col>
        <div class="align-center d-flex justify-center">
          <v-btn @click="addCycle()"
                 class="white--text"
                 :plain="true"
                 color="white"
                 :ripple="false" rounded>
            <v-icon left>mdi-plus</v-icon>
            Agregar Ciclo
          </v-btn>
        </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Header from "../components/Header";
import CycleCard from "../components/CycleCard";
import Cycle from "../store/Cycle";
import Routine from "../store/Routine";
import {RStore} from "../store/RStore";
import {Api} from "../js/api";

let currentRoutine = new Routine();

export default {
  name: "CreateRoutine",
  components : {
    CHeader: Header,
    CCycleCard: CycleCard
  },
  data: () => {
    return {
      cOrder: 1,
      cycles: RStore.currentCycles,
      id: String,
      currentRoutine: currentRoutine,
      routineItems: [
        {title: "Nombre", content: currentRoutine.name},
        {title: "Categoría", content: currentRoutine.category},
        {title: "Dificultad", content: currentRoutine.difficulty},
        {title: "Visibilidad", content: currentRoutine.isPublic}
      ],
      headers: [
        {text: 'Ejericio', align: 'Start', value:'name', groupable:'False'},
        {text: 'Tiempo/Repeticiones', value:'rep'},
      ],
      store: RStore
    }
  },
  methods: {
    addCycle() {
      let order = this.cOrder;
      this.cOrder++;
      RStore.currentCycles.push(new Cycle(`Ciclo ${order}`, 'warmup', order, 1));
      RStore.cycleExercises.push({
        cycleOrder: order,
        exercises: []
      })
    },
    enabledModText: function (element) {
      element.enabled = !element.enabled
    },
    saveRoutine() {
      RStore.currentRoutine.name = this.routineItems[0].content;
      RStore.currentRoutine.category = this.routineItems[1].content;
      RStore.currentRoutine.difficulty = this.routineItems[2].content;
      RStore.currentRoutine.isPublic = this.routineItems[3].content;
      RStore.createRoutine();
      console.log(RStore.currentRoutine.id)
      this.$router.push(`/my-routines`);
    }
  },
  beforeCreate() {
    currentRoutine =  new Routine()
    RStore.currentRoutine = currentRoutine;
    RStore.currentRoutine.difficulty = "rookie";
    RStore.currentRoutine.category = {
      id: 1
    }
    if (Api.token === undefined){
      this.$router.push('/login');
    }
    RStore.currentRoutine.isPublic = true;
    RStore.currentCycles = [];
    RStore.cycleExercises = [];
  }
}
</script>

<style scoped>
.borderRounded {
  border-radius: 20px !important;
}

.slide { opacity: 0.5; }

.slide.current {
  opacity: 1;
  animation-name: fadeIn;
  -webkit-animation-name: fadeIn;
  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;
  visibility: visible !important;
}

.end-input >>> input {
  text-align: right;
}
.color-disabled >>> input {
  color: white;
}
.color-enabled >>> input {
  color: black;
}

@keyframes fadeIn {
  0% {
    transform: scale(0.5);
    opacity: 0.0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    -webkit-transform: scale(0.5);
    opacity: 0.0;
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 1;
  }
}
</style>
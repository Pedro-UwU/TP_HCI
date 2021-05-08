<template>
  <v-app style="background: #192633">
    <c-header/>
    <v-container class="my-10">
      <v-row align="center" class="my-3">
        <div class=" white--text text-h3">
          Crear Rutina
        </div>
      </v-row>
      <v-row align="center" class="my-3">
        <v-col cols="4" align="center">
          <v-img style="border-radius: 20px !important;" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" aspect-ratio="1" width="90%" class="align-end">
              <v-card class="transparent">
              <v-container class="bottom-image align-content-center">
              </v-container>
              </v-card>
          </v-img>
        </v-col>
        <v-col align="left">
          <v-list class="transparent">
            <v-container v-for="element in routineItems" :key="element.title">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-group>
                    <v-list-item-title class="transparent white--text font-weight-bold text-h6">{{ element.title }}</v-list-item-title>
                  </v-list-item-group>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-subtitle right class="transparent white--text">{{ element.value }}</v-list-item-subtitle>
                </v-list-item-action>
              </v-list-item>
              <v-divider class="white"></v-divider>
            </v-container>
          </v-list>
        </v-col>
      </v-row>
      <v-divider class="my-10"></v-divider>
      <v-row>
        <v-col>
          <div class=" white--text text-h3">
            Agregar Ejercicios
          </div>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col class="align-center">
          <c-cycle-card class="my-5 align-center slide current movable" :cycle=CCalentamiento></c-cycle-card>
          <c-cycle-card class="my-5 align-center slide current movable" v-for="ciclo in CCiclos" :routine="routine" :cycle="ciclo" :key="ciclo.name"></c-cycle-card>
          <c-cycle-card class="my-5 align-center slide current movable" :cycle=CEnfriamiento></c-cycle-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="align-center d-flex justify-center">
          <v-btn width="lg 25%" @click="addCycle()" class="align-center  black--text quinary my-3 mx-5" rounded>
            <v-icon left>mdi-plus</v-icon>
            Agregar Ciclo
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import CycleCard from "../components/CycleCard";
import Cycle from "../store/Cycle";
import Routine from "../store/Routine";

let routine = new Routine("Rutina 1", "Biceps", "Facil", "60 minutos");
let calentamientoEx = new Cycle("Calentamiento", 2);
let enfriamientoEx = new Cycle("Enfriamiento", 2);
routine.addCoolDown(enfriamientoEx);
routine.addWarmUp(calentamientoEx);

export default {
  name: "CreateRoutine",
  components : {
    CHeader: Header,
    CCycleCard: CycleCard
  },
  // data: () => {
  //   return {
  //     routineItems: [
  //       {title: "Categoría", value: "Parte de arriba"},
  //       {title: "Dificultad", value: "Hardcore"},
  //       {title: "Duración", value: "3 Parciales de Bases de Datos"}
  //     ],
  //
  //     headers: [
  //       {text: 'Ejericio', align: 'Start', value:'name', groupable:'False'},
  //       {text: 'Tiempo/Repeticiones', value:'rep'},
  //     ],
  //     ejercicios: [
  //       {name: "Salto de Cuerda", rep:"5 repeticiones"},
  //       {name: "Trote", rep:"4 minutos"},
  //       {name: "Salto de Cuerda", rep:"5 repeticiones"},
  //       {name: "Trote", rep:"4 minutos"},
  //       {name: "Salto de Cuerda", rep:"5 repeticiones"},
  //       {name: "Trote", rep:"4 minutos"}
  //     ]
  //   }
  // }
  data: () => {
    return {
      routineItems: [
            {title: "Categoría", value: "Parte de arriba"},
            {title: "Dificultad", value: "Hardcore"},
            {title: "Duración", value: "3 Parciales de Bases de Datos"}
      ],

      headers: [
        {text: 'Ejericio', align: 'Start', value:'name', groupable:'False'},
        {text: 'Tiempo/Repeticiones', value:'rep'},
      ],


      routine: routine,
      CCalentamiento: routine.warmUp,
      CEnfriamiento: routine.coolDown,
      CCiclos: routine.cycles

    }
  },
  methods: {
    addCycle() {
      routine.addCycle(new Cycle(`Ciclo ${routine.cycles.length + 1}`, 2))
      console.log(routine);
    }
  }
}
</script>

<style scoped>

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
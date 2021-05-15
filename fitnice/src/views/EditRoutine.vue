<template>
  <v-app style="background: #192633">
    <c-header/>
    <v-container class="my-10">
      <v-row align="center" class="my-3">
        <div class=" white--text text-h3">
          Editar Rutina
        </div>
        <v-spacer/>

        <div @click="deleteRoutine()">
          <v-btn
              solo
              plain
          >
            <v-icon left>mdi-delete</v-icon>
            Borrar
          </v-btn>
        </div>
        <div @click="saveRoutine(); $router.push(`/check?RId=${getId()}`)">
          <v-btn
              solo
              plain
          >
            Guardar
            <v-icon right>mdi-content-save</v-icon>
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
                        :key="cycle.order"
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
import {Api} from "../js/api";
import {getUrlVars} from "../js/urlParams";
import {router} from "../main";
import {RStore} from "../store/RStore";
import CycleCard from "../components/CycleCard";
import Cycle from "../store/Cycle";
import {RoutineApi} from "../js/RoutineApi";

export default {
  name: "EditRoutine",
  components: {
    CHeader: Header,
    CCycleCard: CycleCard
  },
  data: () => {
    return {
      cOrder: RStore.currentCycles.length,
      RoutineId: 0,
      currentRoutine: null,
      cycles: null,
      store: RStore,
      routineItems: [
        {title: "Nombre", content: null},
        {title: "Categoría", content: null},
        {title: "Dificultad", content: null},
        {title: "Visibilidad", content: null}
      ],
    }
  },
  methods: {
    addCycle() {
      let order = RStore.currentCycles.length + 1;
      RStore.currentCycles.push(new Cycle(`Ciclo ${order}`, 'warmup', order, 1,));
      RStore.cycleExercises.push({
        cycleOrder: order,
        exercises: []
      })
    },
    getId() {
      let href = window.location.href;
      return getUrlVars(href)["RId"];
    },
    enabledModText: function (element) {
      element.enabled = !element.enabled
    },
    saveRoutine() {
      RStore.currentRoutine.name = this.routineItems[0].content;
      RStore.currentRoutine.category = this.routineItems[1].content;
      RStore.currentRoutine.difficulty = this.routineItems[2].content;
      RStore.currentRoutine.isPublic = this.routineItems[3].content;
      console.log(RStore);
      RStore.cleanRoutine(RStore.currentRoutine.id).then(() => {
        RStore.modifyRoutine(RStore.currentRoutine.id);
      })
    },
    deleteRoutine() {
      RoutineApi.deleteRoutine(RStore.currentRoutine.id).then(() => {
        router.push("/")
      })
    }
  },
  beforeCreate() {
    if (Api.token === undefined) {
      if (localStorage.getItem('token') !== null) {
        Api.token = localStorage.getItem('token')
      } else {
        this.$router.push('/login');
      }
    }
    let href = window.location.href;
    this.RoutineId = getUrlVars(href)["RId"];
    if (this.RoutineId === undefined || this.RoutineId === null || isNaN(this.RoutineId)) {
      router.push('/login')
    } else RStore.loadRoutine(this.RoutineId).then(() => {
      this.routineItems =
          [
            {title: "Nombre", content: RStore.currentRoutine.name},
            {title: "Categoría", content: RStore.currentRoutine.category},
            {title: "Dificultad", content: RStore.currentRoutine.difficulty},
            {title: "Visibilidad", content: RStore.currentRoutine.isPublic}
          ];
      this.currentRoutine = RStore.currentRoutine
      this.cycles = RStore.currentCycles
      this.store = RStore;
      this.cOrder = RStore.cycleOrder;
      console.log(RStore);
    })
  }
}
</script>

<style scoped>

.end-input >>> input {
  text-align: right;
}

.color-disabled >>> input {
  color: white;
}
.color-enabled >>> input {
  color: black;
}

</style>
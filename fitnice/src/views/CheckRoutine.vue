<template>
  <v-app style="background: #192633">
    <c-header/>
    <v-container class="my-10" v-if="currentRoutine">
      <v-row align="center" class="my-3">
        <div class=" white--text text-h3">
          Ver Rutina
        </div>
        <v-spacer/>
        <div>
          <v-btn
              solo
              plain
              @click="goToEdit()"
              v-if="editable"
          >
            <v-icon left>mdi-pencil</v-icon>
            Editar
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
          <v-col>
            <h4>Creada por: {{ createdBy }}</h4>
          </v-col>
        </v-col>
        <v-col class="align-start">
          <v-list class="transparent">
            <v-container v-for="index in routineItems.length" :key="index-1">
              <v-row>
                <v-col cols="5" class=" transparent white--text font-weight-bold text-h6">{{ routineItems[index-1].title }}</v-col>
                <v-spacer></v-spacer>
                <v-col cols="5" right class="transparent subtitle-1">
                  <v-text-field
                      v-if="index===1"
                      :id="routineItems[index-1].title"
                      v-model="routineItems[index-1].content"
                      solo
                      dense
                      flat
                      readonly
                      background-color="primary"
                      class="end-input color-disabled"
                  >
                  </v-text-field>
                  <v-text-field
                      v-else-if="index===2"
                      :id="routineItems[index-1].title"
                      v-model="routineItems[index-1].content"
                      solo
                      dense
                      flat
                      readonly
                      background-color="primary"
                      class="end-input color-disabled"
                  >
                  </v-text-field>
                  <v-text-field
                    v-else-if="index===3"
                    :id="routineItems[index-1].title"
                    v-model="routineItems[index-1].content"
                    solo
                    dense
                    flat
                    readonly
                    background-color="primary"
                    class="end-input color-disabled"
                  >
                  </v-text-field>
                  <v-text-field
                      v-else
                      :id="routineItems[index-1].title"
                      v-model="visibility"
                      solo
                      dense
                      flat
                      readonly
                      background-color="primary"
                      class="end-input color-disabled"
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
          <v-textarea v-model="currentRoutine.detail" solo readonly background-color="primary" flat class="mb-n10 mt-5"/>
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
      <v-row class="align-center" v-if="store.cycleExercises.length > 0" @load="console.log(store.cycleExercises.length)">
        <v-col class="align-center">
          <c-cycle-card class="my-5 align-center slide current movable"
                        v-for="cycle in cycles"
                        :cycles="cycles"
                        :cycle="cycle"
                        :key="cycle.name"
                        read-only
                        :cycle-exercises="store.cycleExercises[cycle.order-1].exercises"
          ></c-cycle-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import {getUrlVars} from "../js/urlParams";
import {RStore} from "../store/RStore";
import Header from "../components/Header";
import {router} from "../main";
import {Api} from "../js/api";
import CycleCard from "../components/CycleCard";
import {UserApi} from "../js/user";

// let currentRoutine = RStore.currentRoutine;

export default {
  name: "CheckRoutine",
  components: {
    CHeader: Header,
    CCycleCard: CycleCard
  },
  data: () => {
    return {
      createdBy: "",
      editable: false,
      cOrder: 1,
      RoutineId: 0,
      currentRoutine: null,
      cycles: null,
      store: null,
      routineItems: [
        {title: "Nombre", content: null},
        {title: "Categoría", content: null},
        {title: "Dificultad", content: null},
        {title: "Visibilidad", content: null}
      ],
      visibility: "",
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
        {title: "Categoría", content: RStore.currentRoutine.category.name},
        {title: "Dificultad", content: RStore.currentRoutine.difficulty},
        {title: "Visibilidad", content: RStore.currentRoutine.isPublic}
      ];
      this.currentRoutine = RStore.currentRoutine
      UserApi.getUser(this.currentRoutine.userId).then((e) => {
        this.createdBy = e.username
      })
      this.cycles = RStore.currentCycles
      console.log(RStore.currentCycles)
      this.store = RStore;
      this.routineItems[2].content = this.transformDifficulty()
      this.owner()
      this.visibility = this.routineItems[3].content? "Publica" : "Privada"
      console.log(RStore);
    })
  },
  methods: {
    goToEdit() {
      router.push(`/edit?RId=${RStore.currentRoutine.id}`)
    },
    owner() {
      UserApi.getUserId().then((res) => {
        if (res === RStore.currentRoutine.userId) this.editable = true;
      })
    },
    transformDifficulty() {
      switch (this.routineItems[2].content) {
        case 'rookie':
          return 'Novato'
        case 'beginner':
          return 'Principiante'
        case 'intermediate':
            return 'Intermedio'
        case 'advanced':
          return 'Avanzado'
        case 'expert':
          return 'Experto'
      }
    },
  },
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
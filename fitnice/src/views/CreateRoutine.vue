<template>
  <v-app style="background: #192633">
    <c-header/>
    <v-container class="my-10">
      <v-row align="center" class="my-3">
        <div class=" white--text text-h3">
          Editar Rutina
        </div>
        <v-spacer/>
        <div @click="addRoutine(); $router.push('seeRoutine'+$route.params.id)">
          <v-btn
              solo
              plain
          >
            Guardar
            <v-icon>mdi-plus</v-icon>
          </v-btn>
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
              <v-row>
                <v-col cols="5" class=" transparent white--text font-weight-bold text-h6">{{ element.title }}</v-col>
                <v-spacer></v-spacer>
                <v-col cols="5" right class="transparent subtitle-1">
                  <v-text-field v-if="!element.enabled"
                                id="selects"
                                disabled
                                v-model="element.content"
                                solo
                                dense
                                flat
                                background-color="transparent"
                                class="end-input color-disabled"
                  >
                  </v-text-field>
                  <v-text-field v-else
                                id="selects"
                                v-model="element.content"
                                solo
                                dense
                                flat
                                background-color="quinary"
                                class="end-input color-enabled"
                                @keydown.enter="enabledModText(element)"
                  ></v-text-field>
                </v-col>
                <v-col cols="1">
                  <v-icon color="grey" @click="enabledModText(element)" >
                    mdi-pencil-outline
                  </v-icon>
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
          <div class=" white--text text-h3">
            Ciclos
          </div>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col class="align-center">
          <c-cycle-card class="my-5 align-center slide current movable"
                        v-for="ciclo in cycles"
                        :cycles=cycles
                        :cycle="ciclo"
                        :key="ciclo.id"
          ></c-cycle-card>
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
import {RoutineStoreEx} from "../store/RoutineStore";

export default {
  name: "CreateRoutine",
  components : {
    CHeader: Header,
    CCycleCard: CycleCard
  },
  data: () => {
    return {
      cycles: [],
      routineItems: [
        {title: "Nombre", content: "", enabled: false},
        {title: "Categoría", content: "", enabled: false},
        {title: "Dificultad", content: "", enabled: false},
        {title: "Duración", content: "", enabled: false}
      ],
      headers: [
        {text: 'Ejericio', align: 'Start', value:'name', groupable:'False'},
        {text: 'Tiempo/Repeticiones', value:'rep'},
      ],
      store: RoutineStoreEx
    }
  },
  methods: {
    addCycle() {
      this.cycles.push(new Cycle(`Ciclo ${this.cycles.length + 1}`, 2))
    },
    enabledModText: function (element) {
      element.enabled = !element.enabled
    },
    addRoutine() {
      console.log(this.store.get(this.$route.params.id).name)
      this.store.get(this.$route.params.id).name = this.routineItems[0].content;
      console.log(this.store.get(this.$route.params.id).name)
      this.store.get(this.$route.params.id).category = this.routineItems[1].content;
      this.store.get(this.$route.params.id).difficulty = this.routineItems[2].content;
      this.store.get(this.$route.params.id).duration = this.routineItems[3].content;
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.store.get(this.$route.params.routineId);
      this.routineItems[0].content = this.store.get(this.$route.params.id).name;
      this.routineItems[1].content = this.store.get(this.$route.params.id).category;
      this.routineItems[2].content = this.store.get(this.$route.params.id).difficulty;
      this.routineItems[3].content = this.store.get(this.$route.params.id).duration;
      this.cycles = this.store.get(this.$route.params.id).cycles;
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
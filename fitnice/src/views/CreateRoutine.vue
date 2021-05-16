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
            <v-container v-for="index in routineItems.length" :key="index-1">
              <v-row>
                <v-col cols="5" class=" transparent white--text font-weight-bold text-h6">{{ routineItems[index-1].title }}</v-col>
                <v-spacer></v-spacer>
                <v-col cols="5" right class="transparent subtitle-1">
                  <v-text-field v-if="index===1"
                    :id="routineItems[index-1].title"
                    v-model="routineItems[index-1].content"
                    solo
                    dense
                    flat
                    background-color="quinary"
                    class="color-enabled"
                  ></v-text-field>
                  <v-select
                      v-else-if="index===2"
                      :items="CategoryNames"
                      label="Categoría"
                      :menu-props="{ offsetY: true, transition: 'slide-y-transition', light: true, closeOnClick: true,
                    closeOnContentClick: true }"
                      required
                      solo
                      light
                      v-model="category"
                      background-color="quinary"
                  >
                  </v-select>
                  <v-select
                      v-else-if="index===3"
                      :items="difficultys"
                      label="Dificultad"
                      :menu-props="{ offsetY: true, transition: 'slide-y-transition', light: true, closeOnClick: true,
                    closeOnContentClick: true }"
                      required
                      solo
                      light
                      v-model="difficulty"
                      background-color="quinary"
                  >
                  </v-select>
                  <v-select
                      v-else
                      :items="['Publica','Privada']"
                      label="Visibilidad"
                      :menu-props="{ offsetY: true, transition: 'slide-y-transition', light: true, closeOnClick: true,
                    closeOnContentClick: true }"
                      required
                      solo
                      light
                      background-color="quinary"
                      v-model="visibility"
                  >
                  </v-select>
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
            Agregar Ciclo
            <v-icon right>mdi-plus</v-icon>
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
import {CategoryStore} from "../store/CategoryStore";
import {CategoryApi} from "../js/CategoryApi";

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
      difficultys: [
          'Novato','Principiante','Intermedio','Avanzado','Experto'
      ],
      categories: [],
      headers: [
        {text: 'Ejericio', align: 'Start', value:'name', groupable:'False'},
        {text: 'Tiempo/Repeticiones', value:'rep'},
      ],
      store: RStore,
      visibility: 'Publica',
      difficulty: 'Novato',
      category: 'Piernas',
      CategoryNames: []
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
    onlyNames() {
      this.categories.forEach((e) => {this.CategoryNames.push(e.name)})
    },
    getVisibility(visibility) {
      this.visibility = (visibility===true? "Publica" : "Privada")
    },
    lookForCategoryId() {
      for (let i =0 ; i < this.categories.length ; i++) {
        if (this.categories[i].name === this.category) {
          return this.categories[i];
        }
      }
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
    invTransformDifficulty() {
      switch (this.difficulty) {
        case 'Novato':
          return 'rookie'
        case 'Principiante':
          return 'beginner'
        case 'Intermedio':
          return 'intermediate'
        case 'Avanzado':
          return 'advanced'
        case 'Experto':
          return 'expert'
      }
    },
    saveRoutine() {
      RStore.currentRoutine.name = this.routineItems[0].content;
      RStore.currentRoutine.category = this.lookForCategoryId();
      RStore.currentRoutine.difficulty = this.invTransformDifficulty();
      RStore.currentRoutine.isPublic = (this.visibility==="Publica");
      RStore.createRoutine();
      this.$router.push(`/my-routines`);
    }
  },
  beforeCreate() {
    if (Api.token === undefined){
      if (localStorage.getItem('token') !== null) {
        Api.token = localStorage.getItem('token')
      } else {
        this.$router.push('/login');
      }
    }
    CategoryApi.getCategories().then(() => {
      this.categories = CategoryStore.categories
      this.onlyNames()
      console.log(this.categories)
    }).catch(e => {
      console.log(e)
    })
    currentRoutine =  new Routine()
    RStore.currentRoutine = currentRoutine;
    RStore.currentRoutine.detail = "";
    RStore.currentRoutine.difficulty = "rookie";
    RStore.currentRoutine.category = {
      id: 1
    }

    RStore.currentRoutine.isPublic = true;
    this.visibility = (RStore.currentRoutine.isPublic===true? "Publica" : "Privada")
    RStore.currentCycles = [];
    RStore.cycleExercises = [];
    this.routineItems[2].content = this.transformDifficulty()
  },
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
.theme--light.v-list{
  background: #BDC3c7;
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
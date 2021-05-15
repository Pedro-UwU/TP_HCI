<template>
  <v-app style="background: #192633">
    <c-header/>
    <v-container class="my-10">
      <v-row align="center" class="my-3">
        <div class=" white--text text-h3">
          Ver Rutina
        </div>
        <v-spacer/>
        <div>
          <v-btn
              solo
              plain
          >
            <v-icon left>mdi-content-save</v-icon>
            Editar
          </v-btn>
        </div>
      </v-row>
      <v-row class="align-center my-3">
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
                      readonly
                      :id="element.title"
                      v-model="element.content"
                      solo
                      dense
                      flat
                      background-color="primary"
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
          <v-textarea readonly solo-inverted flat v-model="currentRoutine.detail" filled class="mb-n10 mt-5" background-color="primary"/>
        </v-col>
      </v-row>
      <v-divider class="my-10"></v-divider>
    </v-container>
  </v-app>
</template>

<script>
import {getUrlVars} from "../js/urlParams";
import {RStore} from "../store/RStore";
import Header from "../components/Header";
import {router} from "../main";
import {Api} from "../js/api";

let currentRoutine = RStore.currentRoutine;

export default {
  name: "CheckRoutine",
  components: {
    CHeader: Header
  },
  data: () => {
    return {
      RoutineId: 0,
      currentRoutine: RStore.currentRoutine,
      routineItems: [
        {title: "Nombre", content: currentRoutine.name},
        {title: "Categoría", content: currentRoutine.category},
        {title: "Dificultad", content: currentRoutine.difficulty},
        {title: "Visibilidad", content: currentRoutine.isPublic}
      ],
    }
  },
  methods: {

  },
  beforeCreate() {
    if (Api.token === undefined){
      this.$router.push('/login');
    }
  },
  beforeMount() {
    let href = window.location.href;
    this.RoutineId = getUrlVars(href)["RId"];
    if (this.RoutineId === undefined || this.RoutineId === null || isNaN(this.RoutineId)) {
      router.push('/login')
    }
    RStore.loadRoutine(this.RoutineId)
  }
}
</script>

<style scoped>

.end-input >>> input {
  text-align: right;
}

</style>
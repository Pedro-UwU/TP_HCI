<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <v-container>
      <h2 class="subtitles">Recomendaciones</h2>
      <v-container>
        <v-row no-gutters style="background: none" align-content="center">
          <v-col
              v-for="n in 4"
              :key="n"
              cols="12"
              xs="12"
              sm="6"
              md="4"
              lg="3"
              xl="2"
              align-self="center"
          >
            <c-routine-card class="routine" title="Rutina 5" stars="3.5" fav="false" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"/>
          </v-col>
        </v-row>
      </v-container>
      <h2 class="subtitles">Mis rutinas</h2>
      <v-container>
        <v-row no-gutters style="background: none" align-content="center">
          <v-col
              v-for="n in 4"
              :key="n"
              cols="12"
              xs="12"
              sm="6"
              md="4"
              lg="3"
              xl="2"
              align-self="center"
          >
            <c-routine-card class="routine" title="Rutina 5" stars="3.5" fav="true" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"/>
          </v-col>
        </v-row>
      </v-container>
      <h2 class="subtitles">Mis ejercicios</h2>
      <v-container>
        <v-row no-gutters style="background: none" align-content="center">
          <v-col
              v-for="n in 4"
              :key="n"
              cols="12"
              xs="12"
              sm="6"
              md="4"
              lg="3"
              xl="2"
              align-self="center"
          >
            <c-routine-card class="routine" title="Ejercicio 4" stars="4" fav="false" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"/>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>

<style scoped>
.subtitles {
  margin-top: 20px;
  color: white;
  margin-bottom: 20px;
  margin-left: 30px;
}
.routine {
  margin-bottom: 20px;
}
</style>

<script>
import Header from "../components/Header";
import RoutineCard from "../components/RoutineCard";

export default {
  name: "Home",
  components: {
    CHeader: Header,
    CRoutineCard: RoutineCard,
  },
  methods: {
    AmountRoutine(){
      if (window.screen.availWidth < 600) {
        return 2;
      }else if (window.screen.availWidth < 960) {
        return 4;
      }
      else if (window.screen.availWidth < 1264)
        return 3;
      else
        return 4;
    }
  },
}
</script>
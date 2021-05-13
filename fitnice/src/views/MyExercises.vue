<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <v-container>
      <v-row class="align-content-center">
        <h2 class="subtitles">Mis Ejercicios</h2>
        <v-spacer></v-spacer>
        <div>
          <c-exercise-pop-up/>
        </div>
      </v-row>
    </v-container>
    <v-container>
      <c-my-exercises/>
    </v-container>
  </v-app>
</template>

<script>
import Header from "../components/Header";
import MyExercises from "../components/MyExercises";
import ExercisePopUp from "../components/ExercisePopUp";


export default {
  name: "MyExercises",
  components: {
    CHeader: Header,
    CMyExercises: MyExercises,
    CExercisePopUp: ExercisePopUp

  }

}
</script>

<style scoped>
.subtitles {
  margin-top: 20px;
  color: white;
  margin-bottom: 20px;
  margin-left: 30px;
}
</style>
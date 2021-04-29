<template>
  <div>
    <v-app-bar
        color="#374140"
        dense
        dark
        height="70px"
    >
      <v-toolbar-title style="margin-left: 30px; margin-top:20px">
        <img src="../assets/Fitnice.svg" height="50px" width="auto" alt="logo">
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon color="white">
        <img src="../assets/lupa.svg" alt="lupa icon"/>
      </v-btn>
      <v-btn icon color="white" style="margin: 10px">
        <img src="../assets/person.svg" alt="person icon"/>
      </v-btn>

    </v-app-bar>
    <template id="nav">
    <v-tabs
        fixed-tabs
        color="#5885B3"
        background-color="#141D26"
        dark
    >
      <v-tab>
        Inicio
      </v-tab>
      <v-tab>
        Rutinas
      </v-tab>
      <v-tab>
        Favoritos
      </v-tab>
    </v-tabs>
</template>
  </div>
</template>

<style scoped>
span a {
  text-decoration: none;
}
</style>

<script>
import Vuetify from "vuetify";

  var nav = new Vuetify({
    el: nav,
    data : {
      navigation : ["Inicio","Rutinas","Favoritos"],
      color: "#374140"
    }
  });
export default {
  name: "Header"

}
</script>



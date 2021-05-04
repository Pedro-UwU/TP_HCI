<template>
  <div>
    <v-app-bar
        color="#374140"
        dense
        dark
        height="70px"
    >
      <v-toolbar-title class="mt-2">
        <router-link to="/">
          <img src="../assets/fitnice-removebg-preview.png" height="60px" width="auto" alt="logo"/>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon color="white">
        <img src="../assets/lupa.svg" alt="lupa icon"/>
      </v-btn>
  
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              depressed
              icon
              class="transparent"
              v-bind="attrs"
              v-on="on"
          >
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>
        <v-list dark>
          <v-list-item>
            <v-list-item-content>
              <router-link to="/profile" tag="button">
                <v-container>
                  <v-icon left class="white--text">mdi-account</v-icon>
                  Perfil
                </v-container>
              </router-link>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              Otro item xD
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
    <template id="nav">
    <v-tabs
        fixed-tabs
        color="#5885B3"
        background-color="#141D26"
        dark
    >
      <v-tab to="/">
        Inicio
      </v-tab>
      <v-tab to="/routines">
        Rutinas
      </v-tab>
      <v-tab to="/favorites">
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



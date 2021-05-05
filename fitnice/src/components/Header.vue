<template>
  <div>
    <v-app-bar
        class="tertiary"
        dense
        height="70px"
    >
      <v-toolbar-title class="mt-2">
        <router-link to="/">
          <img src="../assets/fitnice-removebg-preview.png" height="60px" width="auto" alt="logo"/>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <ExcercisePopUp></ExcercisePopUp>
      <div>
<!--        <v-col cols="4">-->
<!--          <v-text-field-->
<!--              color="black"-->
<!--              v-model="search"-->
<!--              append-icon="mdi-magnify"-->
<!--              label="Buscar"-->
<!--              single-line-->
<!--              hide-details-->
<!--          ></v-text-field>-->
<!--        </v-col>-->

        <v-btn icon color="white">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu offset-y transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                depressed
                icon
                class="transparent"
                v-bind="attrs"
                v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list class="quinary" light width="200px" height="140px">
            <v-list-item class="my-n2">
              <v-list-item-content>
                <router-link to="/profile" tag="button">
                  <v-container class="text-left">
                    <v-icon left class="black--text">mdi-account</v-icon>
                    Perfil
                  </v-container>
                </router-link>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item class="mb-n3">
              <v-list-item-content>
                <router-link to="/create" tag="button"> <!--- agregar el router que corresponde--->
                  <v-container class="text-left">
                    <v-icon left class="black--text">mdi-plus</v-icon>
                    Crear Rutina
                  </v-container>
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <template id="nav">
    <v-tabs
        fixed-tabs
        background-color="secondary"
    >
      <v-tabs-slider color="transparent"></v-tabs-slider>
      <v-tab exact-active-class="quaternary--text" to="/">
        Explorar
      </v-tab>
      <v-tab exact-active-class="quaternary--text" to="/favorites">
        Favoritos
      </v-tab>
      <v-tab exact-active-class="quaternary--text" to="/my-creations">
        Mis creaciones
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
import ExcercisePopUp from "./ExcercisePopUp";

import Vuetify from "vuetify";

  var nav = new Vuetify({
    el: nav,
    data : {
      navigation : ["Inicio","Rutinas","Favoritos"],
      color: "tertiary"
    }
  });
export default {
  name: "Header",
  components: {
    ExcercisePopUp
  }

}
</script>



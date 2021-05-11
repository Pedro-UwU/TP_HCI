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
      <div>
        <v-text-field v-if="search"
                      :value="searchText"
                      rounded
                      clearable
                      light
                      background-color="white"
                      class="search-sm mt-5"
        ></v-text-field>
      </div>
        <v-btn @click="showSearch()" icon color="white">
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
          <v-list class="quinary" light width="200px">
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
            <v-list-item class="my-n2">
              <v-list-item-content>
                <router-link to="/login" tag="button">
                  <v-container class="text-left">
                    <v-icon left class="black--text">mdi-logout</v-icon>
                    Cerrar Sesión
                  </v-container>
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
    </v-app-bar>
    <template id="nav">
    <v-tabs
        fixed-tabs
        background-color="secondary"
        hide-slider
    >
      <v-tab
          v-for="(item,i) in navigation"
          :key="i" exact-active-class="quaternary--text bg" :to="item.link">
        {{item.name}}
      </v-tab>
    </v-tabs>
</template>
  </div>
</template>

<script>

import Vuetify from "vuetify";

  var nav = new Vuetify({
    el: nav,
  //   data : {
  //       color: "tertiary"
  //   }
  });
export default {
  name: "Header",
  data: () => ({
    searchText: "",
    search: false,
    navigation : [
      {name: "Explorar", link: "/"},
      {name: "Mis Favoritos", link: "/favorites"},
      {name: "Mis Rutinas", link: "/my-routines"},
      {name: "Mis Ejercicios", link: "/my-exercises"}]
  }),
  methods: {
    showSearch: function () {
      this.search = !this.search;
    }
  }

}
</script>

<style scoped>
  span a {
    text-decoration: none;
  }
  .search-sm >>> input{
    color: black;
    border: 0;
  }
  .bg {
    background: rgba(255,255,255,0.08);
  }
</style>

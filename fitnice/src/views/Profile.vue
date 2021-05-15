<template>
  <v-app style="background: #192633">
    <c-header></c-header>
      <v-container class="my-10">
        <v-row>
          <h1 class="white--text" align="center">
            Perfil
          </h1>
          <v-spacer/>
          <v-btn
            class="white--text"
            :plain="true"
            color="white"
            :ripple="false"
            @click="$router.push('/edit-profile')"
          >
            Editar Perfil
            <v-icon>mdi-pencil-outline</v-icon>
          </v-btn>
        </v-row>
        <v-row align="center">
          <v-col cols="4" justify="center">
            <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" max-width="80%" contain></v-img>
          </v-col>
          <v-col>
            <c-profile-elements/>
          </v-col>
        </v-row>
        <v-row class="mt-5">
          <v-col class="d-flex justify-center ">
            <v-btn class="black--text quinary " width="25%"  rounded>
              Cambiar contraseña
              <v-icon right>mdi-lock</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import ProfileElements from "@/components/ProfileElements";
import {Api} from "../js/api";
export default {
  name: "Profile",
  components: {
    CHeader: Header,
    CProfileElements: ProfileElements
  },
  beforeCreate() {
    if (Api.token === undefined){
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <v-container class="my-10">
      <v-row>
        <h1 class="white--text" align="center">
          Editar Perfil
        </h1>
        <v-spacer/>
        <v-btn
            class="white--text"
            :plain="true"
            color="white"
            :ripple="false"
            @click="save();$router.push('/profile')"
        >
          Guardar
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
      </v-row>
      <v-row align="center">
        <v-col cols="4" justify="center">
          <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" max-width="80%" contain></v-img>
            <v-btn depressed width="80%" class="align-center transparent white--text my-5 ">
              Editar Foto
              <v-icon right class="white--text">mdi-pencil-outline</v-icon>
            </v-btn>
        </v-col>
        <v-col>
          <c-edit-profile-elements></c-edit-profile-elements>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import EditProfileElements from "@/components/EditProfileElements";
import {UserApi} from "../js/user";
import {Api} from "../js/api";

export default {
  name: "EditProfile",
  components: {
    CHeader: Header,
    CEditProfileElements: EditProfileElements
  },
  methods: {
    save() {
      UserApi.saveUserElements();
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
  }
}
</script>

<style scoped>

</style>
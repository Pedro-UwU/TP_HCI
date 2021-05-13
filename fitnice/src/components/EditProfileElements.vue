<template>
  <v-list class="transparent">
    <v-container v-for="element in profileElements" :key="element.title">
      <v-row>
        <v-col cols="5" class=" transparent white--text font-weight-bold text-h6">{{ element.title }}</v-col>
        <v-spacer></v-spacer>
        <v-col cols="5" right class="subtitle-1">
          <v-text-field
              v-model="element.content"
              solo
              dense
              flat
              background-color="quinary"
              class="end-input color-enabled"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-divider class="white"></v-divider>
    </v-container>
  </v-list>
</template>

<script>
import {UserStore} from "../store/UserStore";
import {UserApi} from "../js/user";

export default {
  name: "EditProfileElements",
  data: function () {
    return {
      elements: null,
      profileElements: []
    }
  },
  beforeCreate() {
    UserApi.getProfileElements().then(() => {
      this.profileElements = [
        {title: "Nombre", content: UserStore.firstName},
        {title: "Apellido", content: UserStore.lastName},
        {title: "E-mail", content: UserStore.email},
        {title: "Usuario", content: UserStore.username},
        {title: "Genero", content: UserStore.gender}
      ]
    })
  }
}
</script>

<style scoped>
.end-input >>> input {
  text-align: right;
}
.color-disabled >>> input {
  color: white;
}
.color-enabled >>> input {
  color: black;
}
</style>
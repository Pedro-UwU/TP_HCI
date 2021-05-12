<template>
  <v-list class="transparent">
    <v-container v-for="element in profileElements" :key="element.title">
      <v-row>
        <v-col cols="5" class=" transparent white--text font-weight-bold text-h6">{{ element.title }}</v-col>
        <v-spacer></v-spacer>
        <v-col cols="5" right class="transparent subtitle-1">
          <v-text-field v-if="!element.enabled"
              id="selects"
              disabled
              v-model="element.content"
              solo
              dense
              flat
              background-color="transparent"
              class="end-input color-disabled"
          >
          </v-text-field>
          <v-text-field v-else
              id="selects"
              v-model="element.content"
              solo
              dense
              flat
              background-color="quinary"
              class="end-input color-enabled"
              @keydown.enter="enabledModText(element)"
          ></v-text-field>
        </v-col>
        <v-col cols="1">
        <v-icon color="grey" @click="enabledModText(element)" >
          mdi-pencil-outline
        </v-icon>
        </v-col>
      </v-row>
      <v-divider class="white"></v-divider>
    </v-container>
  </v-list>
</template>

<script>

import {UserApi} from "../js/user";
import {UserStore} from "../store/UserStore";

export default {
  name: "ProfileElements",
  data: function () {
    return {
      elements: null,
      profileElements: []
    }
  },
  methods: {
    enabledModText: function (element) {
      if (element.enabled) {
        UserStore.lastName = this.profileElements[1].content;
        UserStore.firstName = this.profileElements[0].content;
        UserStore.gender = this.profileElements[4].content;
        UserApi.saveUserElements();

      }
      element.enabled = !element.enabled
    }
  },
  async beforeCreate() {
    await UserApi.getProfileElements().then(() => {
      this.profileElements = [
        {title: "Nombre", content: UserStore.firstName, enabled: false},
        {title: "Apellido", content: UserStore.lastName, enabled: false},
        {title: "E-mail", content: UserStore.email, enabled: false},
        {title: "Usuario", content: UserStore.username, enabled: false},
        {title: "Genero", content: UserStore.gender, enabled: false}
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
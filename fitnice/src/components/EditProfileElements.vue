<template>
  <v-list class="transparent">
    <v-container v-for="element in profileElements" :key="element.title">
      <div>
        <v-row v-if="element.title==='Nombre' || element.title==='Apellido'">
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
                :value="element.content"
                @change="saveNameAndLastName()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-else-if="element.title==='E-mail' || element.title==='Usuario'">
          <v-col cols="5" class=" transparent white--text font-weight-bold text-h6">{{ element.title }}</v-col>
          <v-spacer></v-spacer>
          <v-col cols="5" right class="subtitle-1">
            <v-text-field
                v-model="element.content"
                solo
                :disabled="true"
                dense
                flat
                background-color="transparent"
                class="end-input color-disabled"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-else class="mb-4">
          <v-col cols="5" class=" transparent white--text font-weight-bold text-h6">{{ element.title }}</v-col>
          <v-spacer></v-spacer>
          <v-col cols="5" right class="subtitle-1">
            <div class="text-right">
              <v-menu
                  bottom
                  offset-y
                  transition="slide-y-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      color="quinary"
                      v-bind="attrs"
                      v-on="on"
                      solo
                      width="auto"
                      @click="isOpen = !isOpen"
                      class="normal-text black--text"
                  >
                    {{element.content}}
                    <v-icon v-if="isOpen">mdi-menu-up</v-icon>
                    <v-icon v-else>mdi-menu-down</v-icon>
                  </v-btn>
                </template>

                <v-list class="quinary">
                  <v-list-item
                      v-for="(item, index) in genders"
                      :key="index"
                      class="cursor"
                      @click="copyGender(item); isOpen = !isOpen"
                  >
                    <v-list-item-title class="black--text">{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>
        <v-divider class="white"></v-divider>
      </div>
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
      profileElements: [],
      genders: ['Femenino','Masculino']
    }
  },
  methods: {
    copyGender(gender) {
      UserStore.gender = gender
      this.profileElements[4].content = gender
    },
    saveNameAndLastName() {
      UserStore.firstName = this.profileElements[0].content;
      UserStore.lastName = this.profileElements[1].content;
    },
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
.cursor {
  cursor: pointer;
}
.normal-text {
  font-family: "Roboto", sans-serif !important;
  text-transform: none;
  font-weight: normal;
  font-size: 1rem !important;
  letter-spacing: 0.009375em !important;
  line-height: 1.75rem;
  box-shadow: none;
}
</style>
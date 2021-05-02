<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <div>
      <v-container class="my-10">
        <v-row>
          <div class=" white--text text-h3 mx-16">
            Perfil
          </div>
        </v-row>
        <v-row align="center">
          <v-col cols="4" justify="center">
            <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" max-width="80%" contain></v-img>
            <v-btn depressed align="center" width="80%" class="transparent white--text my-5 ">
              <v-icon left class="white--text">mdi-pencil-outline</v-icon>
              Editar Foto
            </v-btn>
          </v-col>
          <v-col>
            <v-list class="transparent">
              <v-container v-for="element in profileElements" :key="element.title">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-group>
                      <v-list-item-title class="transparent white--text font-weight-bold text-h6">{{ element.title }}</v-list-item-title>
                    </v-list-item-group>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-subtitle right class="transparent white--text">{{ element.content }}</v-list-item-subtitle>
                  </v-list-item-action>
                </v-list-item>
                <v-divider class="white"></v-divider>
              </v-container>
            </v-list>
          </v-col>
        </v-row>
        <v-row class="mt-5">
          <v-col class="d-flex justify-center ">
            <v-btn class="white--text" style="border-width: 5px" outlined width="90%" rounded>
              <v-icon left>mdi-account-edit-outline</v-icon>
              Editar Perfil
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-center ">
            <v-btn color="blue" style="border-width: 5px" class="white--text" outlined width="90%" rounded>
              <v-icon left>mdi-lock</v-icon>
              Cambiar contraseña
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Profile",
  components: {
    CHeader: Header
  },
  data: function () {
    return {
      profileElements: [
        {title: "Nombre", content: 'John'},
        {title: "Apellido", content: 'Doe'},
        {title: "E-mail", content: 'jonh@email.com'},
        {title: "Usuario", content: 'jDoe22'},
        {title: "Pais", content: ""},
        {title: "Fecha de Nacimiento", content: ""}
      ]
    }
  }
}
</script>

<style scoped>

</style>
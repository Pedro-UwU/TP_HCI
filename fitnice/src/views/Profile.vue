<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <div>
      <div class="text-decoration-underline white--text text-h3 mx-16 mt-10">
        Perfil
      </div>
      <v-container class="my-10">
        <v-row>
          <v-col cols="4">
            <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" max-height="200" max-width="200" contain></v-img>
            <v-btn depressed width="200" class="transparent white--text my-5 ">
              <v-icon left class="white--text">mdi-pencil-outline</v-icon>
              Editar Foto
            </v-btn>
          </v-col>
          <v-col>
            <v-list class="transparent">
                <v-list-item v-for="element in profileElements" :key="element.title">
                  <v-list-item-content>
                    <v-list-item-group>
                      <v-list-item-title class="transparent white--text font-weight-bold my-1 text-h6">{{ element.title }}</v-list-item-title>
                      <v-list-item-title right class="transparent white--text">{{ element.content }}</v-list-item-title>
                      <v-divider class="white"></v-divider>
                    </v-list-item-group>
                  </v-list-item-content>
                </v-list-item>
            </v-list>
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
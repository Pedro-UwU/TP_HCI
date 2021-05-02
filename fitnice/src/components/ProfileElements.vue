<template>
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
</template>

<script>
export default {
  name: "ProfileElements",
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
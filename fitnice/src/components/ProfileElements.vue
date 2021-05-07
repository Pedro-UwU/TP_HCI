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
              :value="element.content"
              solo
              dense
              flat
              background-color="transparent"
              class="end-input color-disabled"
          >
          </v-text-field>
          <v-text-field v-else
              id="selects"
              :value="element.content"
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

export default {
  name: "ProfileElements",
  data: function () {
    return {
      profileElements: [
        {title: "Nombre", content: 'John', enabled: false},
        {title: "Apellido", content: 'Doe', enabled: false},
        {title: "E-mail", content: 'jonh@email.com', enabled: false},
        {title: "Usuario", content: 'jDoe22', enabled: false},
        {title: "Pais", content: "", enabled: false},
        {title: "Fecha de Nacimiento", content: "", enabled: false}
      ]
    }
  },
  methods: {
    enabledModText: function (element) {
      element.enabled = !element.enabled

    },
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
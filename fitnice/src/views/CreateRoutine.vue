<template>
  <v-app style="background: #192633">
    <c-header/>
    <v-container class="my-10">
      <v-row align="center">
        <div class=" white--text text-h3">
          Crear Rutina
        </div>
      </v-row>
      <v-row align="center">
        <v-col cols="4" align="center">
          <v-img style="border-radius: 20px !important;" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" aspect-ratio="1" width="90%" class="align-end">
              <v-card class="transparent">
              <v-container class="bottom-image align-content-center">
              </v-container>
              </v-card>
          </v-img>
        </v-col>
        <v-col align="left">
          <v-list class="transparent">
            <v-container v-for="element in routineItems" :key="element.title">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-group>
                    <v-list-item-title class="transparent white--text font-weight-bold text-h6">{{ element.title }}</v-list-item-title>
                  </v-list-item-group>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-subtitle right class="transparent white--text">{{ element.value }}</v-list-item-subtitle>
                </v-list-item-action>
              </v-list-item>
              <v-divider class="white"></v-divider>
            </v-container>
          </v-list>
        </v-col>
      </v-row>
      <v-divider class="my-10"></v-divider>
      <v-row>
        <div class=" white--text text-h3">
          Agregar Ejercicios
        </div>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-data-table
              class="transparent"
              dark
              hide-default-footer
              :headers="headers"
              :items="ejercicios"
          >

          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "CreateRoutine",
  components : {
//    CRoutineCard: RoutineCard,
    CHeader: Header
  },
  data: () => {
    return {
      routineItems: [
        {title: "Categoría", value: "Parte de arriba"},
        {title: "Dificultad", value: "Hardcore"},
        {title: "Duración", value: "3 Parciales de Bases de Datos"}
      ],

      headers: [
        {text: 'Ejericio', align: 'Start', value:'name', groupable:'False'},
        {text: 'Tiempo/Repeticiones', value:'rep'},
      ],
      ejercicios: [
        {name: "Salto de Cuerda", rep:"5 repeticiones"},
        {name: "Trote", rep:"4 minutos"},
        {name: "Salto de Cuerda", rep:"5 repeticiones"},
        {name: "Trote", rep:"4 minutos"},
        {name: "Salto de Cuerda", rep:"5 repeticiones"},
        {name: "Trote", rep:"4 minutos"}
      ]
    }
  }
}
</script>

<style scoped>

</style>
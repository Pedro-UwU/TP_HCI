<template>
  <v-app style="background: #192633">
    <c-header/>
    <v-container class="my-10">
      <v-row align="center">
        <div class=" white--text text-h3" >
          Crear Rutina
        </div>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="transparent white--text" style="border-width: 2px; border-color: white" flat outlined="true">
            <v-container>
              <v-row align="center">
                <v-icon class="white--text" align="center">mdi-image</v-icon>
              </v-row>
            </v-container>
          </v-card>
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
    CHeader: Header
  }
}
</script>

<style scoped>

</style>
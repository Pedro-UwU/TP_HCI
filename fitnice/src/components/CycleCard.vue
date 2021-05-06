<template>
  <v-card>
    <v-row class="align-center">
      <v-col>
        <div class="white--text text-h5 mx-3">
          {{cycle.name}}
        </div>
      </v-col>

      <v-col class="text-right">
        <div class="text-h5 mx-3 white--text align-center" >Repeticiones:</div>
      </v-col>
      <v-col cols="1" lg="1" md="2">
        <v-text-field
            class="mr-2 align-center mt-4 text-h6 input"
            label="3"
            filled
            solo
            rounded
        ></v-text-field>
      </v-col>
    </v-row>
    <v-col>
      <v-list>

      </v-list>
    </v-col>
    <v-row>

    </v-row>
  </v-card>
</template>

<script>
import Cycle from "../store/Cycle";

export default {
  name: "CycleCard",
  props: {
    cycle: Cycle
  }
}
</script>

<style scoped>


</style>
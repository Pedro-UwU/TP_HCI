<template>
  <v-row class="justify-end mx-2">
    <v-dialog
        v-model="dialog"
        scrollable
        max-width="200px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="white--text transparent my-3 mx-5"
            rounded
            solo
            plain
            :ripple="true"
            v-bind="attrs"
            v-on="on"
        >
          Borrar Ciclo
          <v-icon class="mr-2">mdi-delete</v-icon>
        </v-btn>
      </template>
      <v-card class="primary">
        <v-card-title>
          <span>Desea eliminar <br>"{{cycle.name}}"</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog=false;"
          >
            Cancel
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false;
                    deleteCycle(); selected =[]"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Cycle from "../store/Cycle";

export default {
  name: "DeleteCyclePopUp",
  props: {
    cycles: [],
    cycle: Cycle
  },
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    deleteCycle() {
      for (let i =0 ; i < this.cycles.length; i++) {
        if ( this.cycles[i].name === this.cycle.name ) {
          this.cycles.splice(i,1);
        }
      }
    }
  }

}
</script>

<style scoped>

</style>
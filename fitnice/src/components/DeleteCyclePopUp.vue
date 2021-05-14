<template>
  <div class="justify-end mx-2">
    <v-dialog
        v-model="dialog"
        scrollable
        max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="white--text transparent "
            icon
            solo
            plain
            :ripple="true"
            v-bind="attrs"
            v-on="on"
        >
          <v-icon class="mr-2">mdi-delete-outline</v-icon>
        </v-btn>
      </template>
      <v-card class="primary">
        <v-card-title>
          <span>¿Desea eliminar <br>"{{cycle.name}} ?"</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog=false;"
          >
            Cancelar
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false;
                    deleteCycle();"
          >
            Eliminar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Cycle from "../store/Cycle";
import {RStore} from "../store/RStore";

export default {
  name: "DeleteCyclePopUp",
  props: {
    cycleExercises: Array,
    cycles: Array,
    cycle: Cycle
  },
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    deleteCycle() {
      let found = false;
      for (let i =0 ; i < this.cycles.length; i++) {
        if ( this.cycles[i].name === this.cycle.name ) {
          this.cycles.splice(i,1);
          RStore.cycleExercises.splice(i, 1)
          found=true;
        }
        if (found) {
          this.cycles[i].order--;
        }
      }
    }
  }

}
</script>

<style scoped>

</style>
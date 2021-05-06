<template>
  <v-row justify="center" >
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card class="white--text" color="primary">
        <v-card-title>
          <span class="headline">Creacion de ejercicio</span>
        </v-card-title>
        <v-card-text class="white--text">
          <v-form v-model="isValid">
            <v-row>
              <v-col
                  cols="6"
              >
                <v-text-field
                    :solo="true"
                    label="nombre de ejercicio*"
                    v-model="name"
                    :rules="[v => !!v || 'campo obligatorio']"
                    required
                    background-color="tertiary"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="2"
              >
                <v-text-field
                    :solo="true"
                    @keypress="isNumber(number)"
                    :rules="[v => !!v || 'campo obligatorio']"
                    label="N°"
                    v-model="number"
                    required
                    background-color="tertiary"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="4"
              >
                <v-select
                    :items="['reps.', 'seg.']"
                    :rules="[v => !!v || 'campo obligatorio']"
                    v-model="what"
                    required
                    solo
                    background-color="tertiary"
                ></v-select>
              </v-col>
              <v-col
                  cols="12"
              >
                <v-textarea
                    class="my-n7"
                    height="150px"
                    label="descripcion"
                    solo
                    name="descripcion"
                    background-color="tertiary"
                ></v-textarea>
              </v-col>
            </v-row>
          <small>(*) campo obligatorio</small>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false;
              name=null;
              description=null;
              number=null;
              what=null;"
          >
            Close
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              :disabled="!isValid"
              @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "ExcercisePopUp",
  data: () => ({
    dialog: false,
    isValid: true,
    name: null,
    description: null,
    number: null,
    what: null
  }),
  methods: {
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
}
</script>

<style scoped>

</style>
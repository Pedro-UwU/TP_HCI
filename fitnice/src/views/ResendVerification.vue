<template>
  <v-app>
    <v-card class="cardStyle">
      <v-card-title class="justify-center">
        <img src="../assets/fitnice-removebg-preview.png"  alt="logo" align="center" width="80%">
      </v-card-title>
      <h2 class="titleStyle ma-3 pa-3">
        Debes confirmar tu e-mail<br> antes de iniciar sesion
      </h2>
      <v-card-text>
        <v-text-field
            label="Ingrese su e-mail"
            v-model="email"
            solo
            light
            rounded
            height="2.5em"
            background-color="white"
        >
        </v-text-field>
      </v-card-text>
      <v-card-actions class="justify-center mb-5">
        <v-btn
            color="black--text quinary"
            rounded
            width="75%"
            @click="resendVerification();"
        >
          Reenviar enlace
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import {UserApi} from "../js/user";

export default {
  name: "ResendVerification",
  data:() => ({
    email:  ""
  }),
  methods: {
    resendVerification() {
      let email = { email: this.email}
      UserApi.resendVerification(email);
    }
  }
}
</script>

<style scoped>
#app {
  background-image: linear-gradient(#192633,#5885B3);
}

.cardStyle {
  width: 400px ;
  height: 450px;
  background: #192633;
  opacity: 80%;
  border-radius: 30px;
  border: solid #BDC3c7 1px;
  align-self: center;
  margin-top: 7%;
}
.textStyle {
  text-decoration: underline;
  color: white;
  display: block;
  text-align: center;
  font-size: 1.2em;
}
.titleStyle {
  color: white;
  display: block;
  text-align: center;
  font-size: 1.5em;
}
</style>
<template>
  <v-card class="login">
    <v-card-title class="justify-center">
      <img src="../assets/fitnice-removebg-preview.png"  alt="logo" class="align-center" width="80%">
    </v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
            label="Usuario"
            v-model="user"
            :rules="[v => !!v || 'campo obligatorio']"
            required
            rounded
            solo
            light
            placeholder="Usuario"
            background-color="white"
            height="2.5em"
            class="text-input"
            my-20
        ></v-text-field>
        <v-text-field
            label="Contraseña"
            v-model="password"
            :type="value ? 'password' : 'text'"
            :rules="[v => !!v || 'campo obligatorio']"
            required
            solo
            light
            placeholder="Contraseña"
            rounded
            class="text-input"
            background-color="white"
            height="2.5em"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            @keydown.enter="login()"
        ></v-text-field>
      </v-form>
      <h5 align="center" class="error--text">{{ errorMessage }}</h5>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn
          color="black--text quinary"
          :disabled="!isValid"
          rounded
          width="75%"
          @click="login()"
      >Ingresar</v-btn>
    </v-card-actions>
    <a
        class="no_tienes"
        @click="$router.push('/register')"
    >¿No tenés cuenta? ¡Registrate!</a>
  </v-card>
</template>

<script>

import {UserApi, Credentials} from "../js/user";
import {router} from "../main";


export default {
  name: "LoginForm",
  data: () => ({
    user: null,
    password: null,
    isValid: true,
    value: true,
    errorMessage: ""
  }),
  methods: {
    login() {
      UserApi.login(new Credentials(this.user, this.password)).then(() => {
        router.push("/");
      }).catch(e => {
        if (e.code == 4) {
          this.errorMessage = "Nombre de usuario o contraseña incorrectos"
        } if (e.code == 8) {
          this.$router.push('/resend-verification')
        } else {
          console.log(e)
        }
      });
    }
  }
};
</script>

<style scoped>
.login {
  width: 400px ;
  height: 450px;
  background: #192633;
  opacity: 80%;
  border-radius: 30px;
  border: solid #BDC3c7 1px;
  align-self: center;
  margin-top: 7%;
}
.no_tienes {
  text-decoration: underline;
  color: white;
  display: block;
  text-align: center;
}
.text-input >>> input{
  color: black;
}
</style>
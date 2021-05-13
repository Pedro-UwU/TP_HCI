<template>
  <v-card class="login">
    <v-card-title class="justify-center">
      <img src="../assets/fitnice-removebg-preview.png"  alt="logo" align="center" width="80%">
    </v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
            light
            label="Nombre"
            v-model="name"
            :rules="[v => !!v || 'campo obligatorio']"
            required
            rounded
            solo
            placeholder="Nombre"
            background-color="white"
            class="text-input"
            height="2.5em"
        ></v-text-field>
        <v-text-field
            light
            label="Apellido"
            v-model="lastname"
            :rules="[v => !!v || 'campo obligatorio']"
            required
            rounded
            solo
            class="text-input"
            placeholder="Apellido"
            background-color="white"
            height="2.5em"
        ></v-text-field>
        <v-text-field
            light
            label="E-mail"
            v-model="email"
            :rules="[v => !!v || 'campo obligatorio']"
            required
            rounded
            solo
            class="text-input"
            placeholder="E-mail"
            background-color="white"
            height="2.5em"
        ></v-text-field>
        <v-text-field
            light
            label="Nombre de usuario"
            v-model="username"
            :rules="[v => !!v || 'campo obligatorio']"
            required
            rounded
            solo
            class="text-input"
            placeholder="Nombre de usuario"
            background-color="white"
            height="2.5em"
        ></v-text-field>
        <v-text-field
            light
            label="Contraseña"
            v-model="password"
            :type="value1 ? 'password' : 'text'"
            :rules="[v => !!v || 'campo obligatorio']"
            required
            solo
            class="text-input"
            placeholder="Contraseña"
            rounded
            background-color="white"
            height="2.5em"
            :append-icon="value1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value1 = !value1)"
        ></v-text-field>
        <v-text-field
            light
            label="Repetir contraseña"
            v-model="confirmPassword"
            :type="value2 ? 'password' : 'text'"
            :rules="[confirmPasswordRules,passwordConfirmationRule,v => !!v || 'campo obligatorio']"
            required
            solo
            class="text-input"
            placeholder="Repetir contraseña"
            rounded
            background-color="white"
            :append-icon="value2 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value2 = !value2)"
            height="2.5em"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn
          color="black--text quinary"
          :disabled="!isValid"
          rounded
          width="75%"
          class="less-margin"
          @click="sendRegForm()"
      >Registrarse</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {UserApi} from "../js/user";

export default {
  name: "RegisterForm",

  data: () => ({
    value1: true,
    value2: true,
    isValid: true,
    email: null,
    password: null,
    name:null,
    lastname:null,
    username: null,
    confirmPassword: null,
    passwordRules: [v => !!v || "Password is required"],
    confirmPasswordRules: [v => !!v || "Password is required"],
  }),
  computed: {
    passwordConfirmationRule() {
      return () => (this.password === this.confirmPassword) || 'las contraseñas no coinciden'
    },
  },
  methods: {
    sendRegForm() {
      let userInfo = {
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        gender: "male", //TODO agregar genero
        birthdate: 284007600000, //TODO Agregar fecha de nacimiento
        email: this.email,
        phone: "123456", //TODO Agregar Telefono
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png",
        metadata: null
      }
      UserApi.create(userInfo, null)
    }

  }
};
</script>

<style scoped>
.login {
  width: 400px ;
  height: 670px;
  background: #192633;
  opacity: 80%;
  border-radius: 30px;
  border: solid #BDC3c7 1px;
  align-self: center;
  margin-top: 7%;
}
.less-margin {
  margin-top: -20px;
}
.text-input >>> input{
  color: black;
}
</style>
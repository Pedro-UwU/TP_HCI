<template>
  <v-card class="login">
    <v-card-title class="justify-center">
      <img src="../assets/fitnice-removebg-preview.png"  alt="logo" align="center" width="80%">
    </v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
            label="e-mail"
            v-model="email"
            :rules="[v => !!v || 'campo obligatorio']"
            required
            rounded
            solo
            placeholder="e-mail"
            background-color="white"
            height="2.5em"
            class="text-input"
            my-20
        ></v-text-field>
        <v-text-field
            label="contraseña"
            v-model="password"
            type="password"
            :rules="[v => !!v || 'campo obligatorio']"
            required
            solo
            placeholder="contraseña"
            rounded
            class="text-input"
            background-color="white"
            height="2.5em"
        ></v-text-field>
      </v-form>
    </v-card-text>
      <a
          class="no_tienes"
      >No tenés cuenta? Registrate!</a>
    <v-card-actions class="justify-center">
      <v-btn
          color="tertiary white--text"
          :disabled="!isValid"
          rounded
          width="50%"
      >Ingresar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: "LoginForm",
  data: () => ({
    email: null,
    password: null,
    isValid: true
  })
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
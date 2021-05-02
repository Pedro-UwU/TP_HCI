<template>
  <v-card class="login">
    <v-card-title class="justify-center">
      <img src="../assets/fitnice-removebg-preview.png"  alt="logo" align="center" width="80%">
    </v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
            label="nombre"
            v-model="name"
            :rules="[v => !!v || 'campo obligatorio']"
            required
            rounded
            solo
            placeholder="nombre"
            background-color="white"
            height="2.5em"
        ></v-text-field>
        <v-text-field
            label="apellido"
            v-model="lastname"
            :rules="[v => !!v || 'campo obligatorio']"
            required
            rounded
            solo
            placeholder="apellido"
            background-color="white"
            height="2.5em"
        ></v-text-field>
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
        ></v-text-field>
        <v-text-field
            label="nombre de usuario"
            v-model="username"
            :rules="[v => !!v || 'campo obligatorio']"
            required
            rounded
            solo
            placeholder="nombre de usuario"
            background-color="white"
            height="2.5em"
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
            background-color="white"
            height="2.5em"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn
          color="#141D26 white--text"
          :disabled="!isValid"
          rounded
          width="50%"
          class="less-margin"
      >Registrarse</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "RegisterForm",

  data: () => ({
    email: null,
    password: null,
    name:null,
    lastname:null,
    username: null
  })
};
</script>

<style scoped>
.login {
  width: 400px ;
  height: 600px;
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
</style>
<template>
  <v-app>
    <h1>Email Verficiado</h1>
    <h3>Su codigo es: {{$route.query.code}}</h3>
    <h3>Su email es: {{$route.query.user}}</h3>
    <p>Para ingresar, porfa dirijase a <router-link to="/login"> este enlance</router-link></p>
  </v-app>
</template>

<script>


export default {
  name: "VerificacionTemporal"
}
</script>

<style scoped>

</style>
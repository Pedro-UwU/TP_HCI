<template>
  <v-card class="cardStyle">
    <v-card-title class="justify-center">
      <img src="../assets/fitnice-removebg-preview.png"  alt="logo" align="center" width="80%">
    </v-card-title>
    <h2 class="titleStyle ma-3 pa-3">
      ¡Felicitaciones! Su e-mail se verificó con éxito
    </h2>
    <a
        class="textStyle"
    >Ir a Iniciar Sesión</a>
  </v-card>
</template>

<script>
export default {
  name: "SuccessfulEmail"
}
</script>

<style scoped>
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
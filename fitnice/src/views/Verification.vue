<template>
  <v-app>
    <v-card class="cardStyle">
      <v-card-title class="justify-center">
        <img src="../assets/fitnice-removebg-preview.png"  alt="logo" align="center" width="80%">
      </v-card-title>
        <h2 class="titleStyle ma-3 pa-3">
          Te hemos enviado un codigo de verificación
        </h2>
        <h2 class="titleStyle ma-3 pa-3">
          ¡Revisa tu casilla de correos!
        </h2>
    </v-card>
  </v-app>
</template>

<script>

export default {
  name: "Verification",
}
</script>

<style scoped>
#app {
  background-image: linear-gradient(#192633,#5885B3);
}
.text-input >>> input{
  color: black;
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
.titleStyle {
  color: white;
  display: block;
  text-align: center;
  font-size: 1.5em;
}
</style>
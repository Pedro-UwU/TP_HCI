<template>
  <v-app>
      <v-card class="cardStyle">
        <v-card-title class="justify-center">
          <img src="../assets/fitnice-removebg-preview.png"  alt="logo" align="center" width="80%">
        </v-card-title>
        <h2 class="titleStyle ma-3 pa-3">
          Felicitaciones! Su e-mail se verificó con éxito
        </h2>
        <a
            class="textStyle"
        >Ir a Iniciar Sesión</a>
      </v-card>
  </v-app>
</template>

<script>

import {getUrlVars} from "../js/urlParams";
import {UserApi} from "../js/user";
import {router} from "../main";

export default {
  name: "VerificationSuccess",
  components: {
  },
  beforeCreate: () => {
    let href = window.location.href;
    let email = getUrlVars(href)["email"].replace("%40", "@");
    let code = getUrlVars(href)["code"];
    let data = {email: email, code: code};
    UserApi.validate(data, null).catch(e => {
      e;
      router.push("/NotFound")
    });
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
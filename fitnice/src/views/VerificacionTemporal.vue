<template>
  <v-app>
    <h1>Email Verficiado</h1>
    <h3>Su codigo es: {{$route.query.code}}</h3>
    <h3>Su email es: {{$route.query.email}}</h3>
    <p>Para ingresar, porfa dirijase a <router-link to="/login"> este enlance</router-link></p>
  </v-app>
</template>

<script>


export default {
  name: "VerificacionTemporal",
  methods: {
    sendVerification() {
      //email: `${document.query.code}`
    }
  },
  created : async () => {
    let url = new URL(window.location.href);
    let email = await url.searchParams.keys();
    console.log(email.next())
    // let credentials = {
    //   email: url.searchParams.get("email"),
    //   code: url.searchParams.get("code")
    // }
  }

}
</script>

<style scoped>

</style>
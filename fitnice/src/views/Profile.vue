<template>
  <v-app style="background: #192633">
    <c-header></c-header>
      <v-container class="my-10">
        <v-row>
          <div class=" white--text text-h3" align="center">
            Perfil
          </div>
        </v-row>
        <v-row align="center">
          <v-col cols="4" justify="center">
            <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" max-width="80%" contain></v-img>
            <v-btn depressed align="center" width="80%" class="transparent white--text my-5 ">
              <v-icon left class="white--text">mdi-pencil-outline</v-icon>
              Editar Foto
            </v-btn>
          </v-col>
          <v-col>
            <ProfileElements></ProfileElements>
          </v-col>
        </v-row>
        <v-row class="mt-5">
<!--          <v-col class="d-flex justify-center ">-->
<!--            <v-btn class="white&#45;&#45;text" style="border-width: 2px" outlined width="90%" rounded>-->
<!--              <v-icon left>mdi-account-edit-outline</v-icon>-->
<!--              Editar Perfil-->
<!--            </v-btn>-->
<!--          </v-col>-->
          <v-col class="d-flex justify-center ">
            <v-btn color="white" style="border-width: 0px" class="white--text quinary" outlined width="25%" rounded>
              <v-icon left>mdi-lock</v-icon>
              Cambiar contraseña
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import ProfileElements from "@/components/ProfileElements";
export default {
  name: "Profile",
  components: {
    CHeader: Header,
    ProfileElements: ProfileElements
  }
}
</script>

<style scoped>

</style>
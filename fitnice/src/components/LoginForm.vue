<template>
  <v-card width="400" height="600">
    <v-card-title>Fitnice</v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
            label="e-mail"
            v-model="email"
            :rules="[v => !!v || 'campo obligatorio']"
            required
        ></v-text-field>
        <v-text-field
            label="contraseña"
            v-model="password"
            type="password"
            :rules="[v => !!v || 'campo obligatorio']"
            required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="red">No tenés cuenta? Registrate!</v-btn>
      <v-btn
          color="blue"
          :disabled="!isValid"
      >Ingresar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: "LoginForm",

  data: () => ({
    email: null,
    password: null
  })
};
</script>

<style scoped>

</style>
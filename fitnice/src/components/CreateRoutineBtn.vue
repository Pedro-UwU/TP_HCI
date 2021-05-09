<template>
  <v-btn
      class="white--text"
      :plain="true"
      color="white"
      :ripple="false"
      @click="$router.push('/create')"
  >
    Crear Rutina
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script>

export default {
  name: "CreateRoutineBtn"
}
</script>

<style scoped>

</style>
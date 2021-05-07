<template>
  <div>
    <v-container>
      <v-row no-gutters style="background: none" align-content="center">
        <v-col
            v-for="n in 4"
            :key="n"
            align="center"
        >
          <c-routine-card class="routine" title="Rutina 5" stars=3.5 fav=true src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import RoutineCard from "./RoutineCard";

export default {
name: "MyRoutines",
  components: {
    CRoutineCard: RoutineCard,
  }
}
</script>

<style scoped>

</style>
<template>
  <v-app style="background: #192633">
    <c-header/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    CHeader: Header,
  },

  data: () => ({
    //
  }),
};
</script>

<template>
  <v-app>
    <c-header/>
    <v-main>
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

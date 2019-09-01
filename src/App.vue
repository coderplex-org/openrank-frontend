<template>
<Layout>
  <v-container>
    <router-view></router-view>
  </v-container>
</Layout>
</template>

<script>
import Layout from './components/layout';

export default {
  name: 'App',
  components: {
    Layout,
  },
  data: () => ({
    //
  }),
};
</script>

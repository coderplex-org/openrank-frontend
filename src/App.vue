<template>
<Layout>
  <template v-slot:navigation>
    <v-btn
      text
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
      <span class="mr-2">Latest Release</span>
    </v-btn>
  </template>
  <HelloWorld />
</Layout>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Layout from './components/layout';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Layout,
  },
  data: () => ({
    //
  }),
};
</script>

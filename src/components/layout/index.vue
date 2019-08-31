<template>
  <v-app>
    <Header>
      <slot name="navigation"></slot>
    </Header>
    <v-content>
      <slot></slot>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from './Header';
import Footer from './Footer';

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>

</style>

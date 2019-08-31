<template>
  <v-app-bar app flat dark color="primary">
    <v-toolbar-title class="headline text-uppercase">
      <span @click="$router.push('/')">Open Rank</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <slot></slot>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.v-toolbar__title {
  cursor: pointer;
}
</style>

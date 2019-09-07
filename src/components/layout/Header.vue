<template>
  <v-app-bar app flat dark color="primary">
    <v-toolbar-title class="headline text-uppercase">
      <span @click="$router.push('/')">Open Rank</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/login">
      <span class="mr-2">Login</span>
    </v-btn>
    <v-btn text to="/register">
      <span class="mr-2">SignUp</span>
    </v-btn>
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

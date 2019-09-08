<template>
  <v-app-bar app flat dark color="indigo lighten-1">
    <v-toolbar-title class="headline text-uppercase">
      <span @click="$router.push('/')">Open Rank</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/login" v-if="!isLoggedIn">
      <span class="mr-2">Login</span>
    </v-btn>
    <v-btn text to="/register" v-if="!isLoggedIn">
      <span class="mr-2">SignUp</span>
    </v-btn>
    <v-btn text to="/profile" v-if="isLoggedIn">
      <span class="mr-2">Profile</span>
    </v-btn>
    <v-btn text v-if="isLoggedIn" @click="logout">
      <span class="mr-2">Logout</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapActions } = createNamespacedHelpers('authentication/user');

export default {
  name: 'Header',
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ]),
  },
  methods: {
    logout() {
      this.$store.commit('authentication/user/setToken', null);
      this.clearUser();
      this.$router.push('/').catch(() => {});
    },
    ...mapActions([
      'clearUser',
    ]),
  },
};
</script>

<style scoped>
.v-toolbar__title {
  cursor: pointer;
}
</style>

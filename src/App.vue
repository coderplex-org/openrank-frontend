<template>
  <fragment>
    <loading
      :active.sync="isLoading"
      color="indigo"
      loader="dots"
      opacity=0.4
      is-full-page
    ></loading>
    <Layout>
      <v-container>
        <router-view></router-view>
      </v-container>
    </Layout>
  </fragment>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { mapGetters } from 'vuex';

import Layout from './components/layout';

export default {
  name: 'App',
  components: {
    Layout,
    Loading,
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
  },
};
</script>

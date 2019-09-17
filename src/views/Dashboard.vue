<template>
  <ThreeSectionContainer :showFilter="showFilter" :setShowFilter="setShowFilter" >
    <template v-slot:left>
      <DataFilter :sections="sections" />
    </template>
    <template v-slot:middle>
      <DataListContainer
        :childComponent="childComponent"
        :items="items"
      />
    </template>
    <template v-slot:right>
      <DataDetails />
    </template>
  </ThreeSectionContainer>
</template>

<script>
import {
  DataListContainer,
  DataFilter,
  DataDetails,
  QuestionListItem,
} from '../components';
import ThreeSectionContainer from '../components/common';

import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations, mapActions } = createNamespacedHelpers('data/dashboard');
const { mapGetters } = createNamespacedHelpers('data/dashboard');

export default {
  components: {
    ThreeSectionContainer,
    DataListContainer,
    DataDetails,
    DataFilter,
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ]),
    ...mapState([
      'childComponent',
      'items',
      'sections',
      'showFilter',
      'successMsg',
      'errorMsg',
    ]),
    alerts() {
      return [
        {
          type: 'success',
          message: this.successMsg,
        },
        {
          type: 'error',
          message: this.errorMsg,
        },
      ];
    },
  },
  mounted() {
    if (process.env.NODE_ENV === 'production') {
    if (!this.isLoggedIn) {
      return this.$router.push('/login');
    }
    this.$store.dispatch('authentication/user/fetchUser');
    } else {
      this.$store.dispatch('data/dashboard/fetchDummyData');
      this.$store.dispatch('data/dashboard/fetchSectionsData');
    }
  },
  methods: {
    ...mapMutations([
      'setFilter',
      'setDetails',
      'setSearch',
      'setShowFilter'
    ]),
    ...mapActions([
      'fetchData',
    ]),
    getDataItemsFromApi() {
      // TODO: Make API call and fetch data items from server
      // Modify this function to achieve the same.
    },
    getChildComponent() {
      return QuestionListItem;
    },
  },
};
</script>

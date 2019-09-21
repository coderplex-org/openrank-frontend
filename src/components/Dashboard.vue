<template>
  <v-card
    class="mx-auto px-4"
    height="100%"
  >
    <dashboard-header :breadcrumb-items="breadcrumbItems" :tab-items="tabItems">
      <template v-slot:actions>
        <slot name="header-actions"></slot>
      </template>
    </dashboard-header>

    <dashboard-body />
  </v-card>
</template>

<script>
import DashboardHeader from './DashboardHeader';
import DashboardBody from './DashboardBody';

export default {
  name: 'Dashboard',
  props: {
    breadcrumbItems: Array,
    tabItems: Array,
  },
  data: () => ({
  }),
  components: {
    DashboardHeader,
    DashboardBody,
  },
};
</script>

<style scoped>

</style>

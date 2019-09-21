<template>
  <v-container fluid :style="{ backgroundColor: 'aliceblue' }">
    <dashboard-header :breadcrumb-items="breadcrumbItems" :tab-items="tabItems" />
  </v-container>
</template>

<script>
import DashboardHeader from './DashboardHeader';

export default {
  name: 'Dashboard',
  data: () => ({
    breadcrumbItems: [
      {
        text: 'Tests',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'OpenRank Software Developer Hiring Test',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Library - OpenRank',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
    tabItems: [
      {
        text: 'OpenRank questions',
      },
      {
        text: 'My company questions',
      },
    ],
  }),
  components: {
    DashboardHeader,
  },
};
</script>

<style scoped>

</style>

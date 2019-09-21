<template>
  <v-card
    class="mx-auto px-4"
    height="100%"
  >
    <dashboard-header :breadcrumb-items="breadcrumbItems" :tab-items="tabItems" />
    <dashboard-body />
  </v-card>
</template>

<script>
import DashboardHeader from './DashboardHeader';
import DashboardBody from './DashboardBody';

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
    DashboardBody,
  },
};
</script>

<style scoped>

</style>

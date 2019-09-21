<template>
  <dashboard :breadcrumb-items="breadcrumbItems" :tab-items="tabItems">
    <template v-slot:header-actions>
      <v-btn class="mx-4">Go to test</v-btn>
      <v-btn class="mx-4">Go to test</v-btn>
    </template>
  </dashboard>
</template>

<script>
import { Dashboard } from '../components';

export default {
  name: 'Home',
  components: {
    Dashboard,
  },
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
};
</script>

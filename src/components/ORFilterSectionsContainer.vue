<template>
  <v-list-group
    sub-group
    multiple
  >
    <!-- Section Name -->
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title class="text-uppercase">{{name}}</v-list-item-title>
      </v-list-item-content>
    </template>
    <!-- Section items -->
    <ORFilterSection v-bind="{ items, name, index, enableSearch }" />
  </v-list-group>
</template>

<script>
import ORFilterSection from './ORFilterSection';

export default {
  name: 'ORFilterSectionsContainer',
  components: {
    ORFilterSection,
  },
  data() {
    return {};
  },
  props: ['name', 'index', 'items', 'enableSearch'],
};
</script>

<style scoped>

</style>

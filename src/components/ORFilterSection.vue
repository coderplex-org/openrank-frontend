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
    <ORFilterSectionItems v-bind="childProps" />
  </v-list-group>
</template>

<script>
import ORFilterSectionItems from './ORFilterSectionItems';

export default {
  name: 'ORFilterSection',
  components: {
    ORFilterSectionItems,
  },
  data() {
    const { search, model, items, sortBy, sortDesc, customFilter } = this;
    return {
      childProps: {
        search,
        model,
        items,
        sortBy,
        sortDesc,
        customFilter
      }
    };
  },
  props: [
    'name',
    'search',
    'model',
    'items',
    'sortBy',
    'sortDesc',
    'customFilter'
  ]
  ,
}
</script>

<style scoped>

</style>
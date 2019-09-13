<template>
  <v-card
      class="mx-auto"
  >
    <v-list>
      <v-list-item class="ma-auto">
        <v-list-item-title>Filter</v-list-item-title>
        <v-btn class="ma-2" large tile icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>
      </v-list-item>
      <ORFilterSection
        v-for="(section, key) in dataSections"
        :key="key"
        v-bind="section"
      />
    </v-list>
  </v-card>
</template>

<script>
import ORFilterSection from './ORFilterSection';

export default {
  name: 'DataFilter',
  components: {
    ORFilterSection,
  },
  data() {
    return { dataSections: this.sections };
  },
  props: {
    sections: {
      type: Array,
      default: () => [
        {
          name: 'Section 1',
          items: [['Management', 'management'],
          ['Settings', 'settings']],
          search: '',
          model: [],
        },
        {
          name: 'Section 2',
          items: [['Management', 'management'],
          ['Settings', 'settings']],
          search: '',
          model: [],
        },
        {
          name: 'Section 3',
          items: [['Management', 'management'],
          ['Settings', 'settings']],
          model: [],
        },
      ],
    },
  },
};
</script>

<style scoped>

</style>

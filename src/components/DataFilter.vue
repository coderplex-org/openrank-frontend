<template>
  <v-card
    class="mx-auto"
  >
    <v-list>
      <v-list-item class="ma-auto">
        <v-list-item-title>Filter</v-list-item-title>
      </v-list-item>
      <ORFilterSectionsContainer
        v-for="(section, index) in sections"
        :key="index"
        v-bind="{...section, index }"
      />
    </v-list>
  </v-card>
</template>

<script>
import ORFilterSectionsContainer from './ORFilterSectionsContainer';

export default {
  name: 'DataFilter',
  components: {
    ORFilterSectionsContainer,
  },
  data() {
    return {};
  },
  props: ['sections'],
};
</script>

<style scoped>

</style>

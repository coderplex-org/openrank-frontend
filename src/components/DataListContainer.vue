<template>
  <v-container>
    <v-data-iterator
      :items="items"
      :footer-props="{ itemsPerPageOptions }"
      :search="search"
      :custom-filter="customFilter"
    >
      <!-- Search bar to search from filtered items -->
      <template v-slot:header>
        <v-toolbar
          dark
          color="blue darken-3"
          class="mb-1"
        >
          <v-text-field
            class="mx-4"
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="search"
            label="Search"
          ></v-text-field>
        </v-toolbar>
      </template>

      <!-- Filtered rows/items -->
      <template v-slot:default="props">
        <template v-for="({ child, props }, index) in props.items">
          <component
            :is="getChildComponent(child)"
            v-bind="props"
            :key="index">
          </component>
        </template>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  name: 'DataListContainer',
  props: {
    childComponent: {
      type: Object,
      default: () => {},
    },
    itemsPerPageOptions: {
      type: Array,
      default: () => [5, 10, 15, 20],
    },
    items: {
      type: Array,
      default: () => [],
    },
    customFilter: {
      type: Function,
      default: (items, search) => items.filter(({ props }) => {
        for (const key in props) {
          const val = props[key];
          if (
            typeof val === 'string' &&
            val.toLowerCase()
              .match(search.toLowerCase()) !== null
          ) return true;
        }
        return false;
      }),
    },
  },
  computed: {
    search: {
      get() {
        return this.$store.getters['data/dashboard/getSearch'];
      },
      set(search) {
        this.$store.commit('data/dashboard/setSearch', search);
      }
    },
  },
  methods: {
    getChildComponent(child) {
      return child || this.childComponent;
    },
  },
};
</script>

<style scoped>

</style>

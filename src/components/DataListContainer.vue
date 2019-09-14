<template>
  <v-container>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
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
        <template v-for="(item, index) in props.items">
          <component
            :is="getChildComponent(item.child)"
            v-bind="item.props"
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
  data() {
    return {
      search: '',
      dataItems: this.items,
    };
  },
  props: {
    childComponent: {
      type: Object,
      default: () => ({}),
    },
    itemsPerPageOptions: {
      type: Array,
      default: () => [5, 10, 15, 20],
    },
    itemsPerPage: {
      type: Number,
      default: 5,
    },
    items: {
      type: Array,
      default: () => [],
    },
    customFilter: {
      type: Function,
      default: (items, search) => {
        const res = items.filter(({ props }, index) => {
          for(let key in props) {
            let val = props[key];
            if (
              typeof val === 'string' &&
              val.toLowerCase()
              .match(search.toLowerCase()) !== null
            ) return true;
          }
          return false;
        });
        return res;
      }
    }
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

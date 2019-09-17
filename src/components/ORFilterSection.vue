<template>
  <v-data-iterator
    :items="items"
    :search="search"
    :sort-by="sortBy"
    :custom-filter="customFilter"
    :sort-desc="sortDesc"
    hide-default-footer
  >
    <!-- Section Search bar -->
    <template v-if="enableSearch" v-slot:header>
      <v-text-field
        class="mr-2 ml-6"
        v-model="search"
        clearable
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
      ></v-text-field>
    </template>

    <!-- Section Items -->
    <template v-slot:default="props">
      <v-list-item-group
        class="mx-2 ml-6"
        v-model="model"
        multiple
        v-for="(item, i) in props.items"
        :key="i"
        link
      >
        <v-list-item
          :key="`item-${i}`"
          :value="item"
          active-class="deep-purple--text text--accent-4"
        >
          <template v-slot:default="{ active, toggle }">
            <v-list-item-content>
              <v-list-item-title v-text="item[0]"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
                :true-value="item[1] || item[0].toLowerCase()"
                color="deep-purple accent-4"
                @click="toggle"
              ></v-checkbox>
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-list-item-group>
    </template>
  </v-data-iterator>
</template>

<script>
export default {
  name: 'ORFilterSection',
  // data() {
  //   return {};
  // },
  props: {
    name: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: -1,
    },
    enableSearch: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
    },
    sortBy: {
      type: Array | String,
      default: () => [],
    },
    customFilter: {
      type: Function,
      default: (items, search) => items.filter(item => {
        for (const val of Object.values(item)) {
          if (
            typeof val === 'string' &&
            val.toLowerCase().match(search.toLowerCase()) !== null
          ) {
            return true;
          }
        }
        return false;
      }),
    },
    sortDesc: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    search: {
      get() {
        return this.$store.getters[`filterSection-${this.name}/getSearch`];
      },
      set(search) {
        this.$store.commit(`filterSection-${this.name}/setSearch`, search);
      },
    },
    model: {
      get() {
        return this.$store.getters[`filterSection-${this.name}/getModel`];
      },
      set(model) {
        this.$store.commit(`filterSection-${this.name}/setModel`, model);
        this.$store.commit('data/dashboard/setFilters', { key: this.name, val: model });
      },
    },
  }
};
</script>

<style scoped>

</style>

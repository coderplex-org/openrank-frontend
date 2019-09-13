<template>
  <v-data-iterator
    :items="dataItems"
    :search="dataSearch || ''"
    :sort-by="dataSortBy"
    :custom-filter="dataCustomFilter"
    :sort-desc="dataSortDesc"
    hide-default-footer
  >
    <!-- Section Search bar -->
    <template v-if="dataSearch !== undefined" v-slot:header>
      <v-text-field
        class="mr-2 ml-6"
        v-model="dataSearch"
        clearable
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
      ></v-text-field>
    </template>

    <!-- Section Items -->
    <template v-slot:default>
      <v-list-item-group
        class="mx-2 ml-6"
        v-model="dataModel"
        multiple
        v-for="(item, i) in dataItems"
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
  name: 'ORFilterSectionItems',
  data() {
    const {
      search,
      model,
      items,
      sortBy,
      customFilter,
      sortDesc,
    } = this;
    return {
      dataSearch: search,
      dataModel: model,
      dataItems: items,
      dataSortBy: sortBy,
      dataCustomFilter: customFilter,
      dataSortDesc: sortDesc,
    };
  },
  props: {
    search: {
      type: String,
      default: undefined,
    },
    model: {
      type: Array,
      default: () => [],
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
      default: (items, search) => {
        return items.filter((item) => {
          for(let item of items) {
            if(
              typeof item === 'string' &&
              item.toLowerCase().match(search.toLowerCase()) !== null
            ) {
              return true;
            }
          }
          return false;
        })
      }
    },
    sortDesc: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style scoped>

</style>
<template>
  <v-row>
    <!-- Toolbar - will be displayed on mobiel or tablets -->
    <v-col v-if="$vuetify.breakpoint.mdAndDown" cols="12">
      <v-toolbar class="pa-0">
        <v-btn class="ma-0" large tile elevation="0" @click="setShowFilter(!showFilter)">
          <v-icon v-if="!showFilter">mdi-filter</v-icon>
          <v-icon v-if="showFilter">mdi-arrow-left</v-icon>
          {{ showFilter ? "Back" : "Filter"}}
        </v-btn>
      </v-toolbar>
    </v-col>

    <!-- Start: Three sections of the container -->

    <!-- Left Section -->
    <v-expand-transition>
      <v-col
        v-show="isFilterOpen()"
        v-bind="leftProps"
      >
          <slot name="left" />
      </v-col>
    </v-expand-transition>

    <!-- Middle Section -->
    <v-expand-transition>
      <v-col
        v-show="!isFilterOpen()"
        v-bind="middleProps"
      >
          <slot name="middle" />
      </v-col>
    </v-expand-transition>


    <!-- Right Section -->
    <v-expand-transition>
      <v-col
        v-show="$vuetify.breakpoint.lgAndUp"
        v-bind="rightProps"
      >
          <slot name="right" />
      </v-col>
    </v-expand-transition>

    <!-- End: Three sections of the container -->
  </v-row>
</template>

<script>
export default {
  name: 'ThreeSectionContainer',
  data() {
    return {
    };
  },
  props: {
    showFilter: {
      type: Boolean,
      default: false,
    },
    setShowFilter: {
      type: Function,
      default: () => {},
    },
    leftProps: {
      type: Object,
      default: () => ({
        xs: 12,
        sm: 12,
        md: 12,
        lg: 3,
      }),
    },
    middleProps: {
      type: Object,
      default: () => ({
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6,
        class: 'pa-0',
      }),
    },
    rightProps: {
      type: Object,
      default: () => ({
        xs: 12,
        sm: 12,
        md: 12,
        lg: 3,
      }),
    },
  },
  methods: {
    isFilterOpen() {
      const {
        mdAndDown,
        lgAndUp,
      } = this.$vuetify.breakpoint;
      return (
        (
          mdAndDown
          && this.showFilter
        ) || lgAndUp
      );
    },
  },
};
</script>

<style scoped>

</style>

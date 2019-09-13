<template>
  <v-row>
    <v-col v-bind="leftProps">
      <slot name="left" />
    </v-col>
    <v-col v-bind="middleProps">
      <slot name="middle" />
    </v-col>
    <v-col v-bind="rightProps">
      <slot name="right" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ThreeSectionContainer',
  props: {
    leftProps: {
      type: Object,
      default: () => ({
        xs:12,
        lg:3,
      })
    },
    middleProps: {
      type: Object,
      default: () => ({
        xs:12,
        lg:6,
        class: 'pa-0',
      })
    },
    rightProps: {
      type: Object,
      default: () => ({
        xs:12,
        lg:3,
      })
    },
  },
}
</script>

<style scoped>

</style>
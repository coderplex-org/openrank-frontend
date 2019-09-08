<template>
  <fragment>
    <v-btn
      v-for="({ icon, value, onClick }, index) in buttons"
      color="deep-purple accent-4"
      text
      @click="onClick"
      :key="index"
    >
      <v-icon left>{{ icon }}</v-icon>
      {{ value }}
    </v-btn>
  </fragment>
</template>

<script>
export default {
  name: 'FormButtons',
  props: {
    buttons: Array,
  },
};
</script>

<style scoped>

</style>

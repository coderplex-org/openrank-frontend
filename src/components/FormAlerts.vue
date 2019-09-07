<template>
  <fragment>
    <v-alert
      v-for="({type, message}, index) in alerts"
      dismissible
      :type="type"
      class="mb-4"
      :value="!!message"
      :key="index"
    >
      {{ message }}
    </v-alert>
  </fragment>
</template>

<script>
export default {
  name: 'FormAlerts',
  props: {
    alerts: Array,
  },
};
</script>

<style scoped>

</style>

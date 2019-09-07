<template>
  <fragment>
    <v-text-field
      v-for="({ label, placeholder, type, icon, value, input }, index) in fields"
      :label="label"
      :placeholder="placeholder"
      :type="type"
      :prepend-icon="icon"
      :value="value"
      @input="input"
      :key="index"
    >
    </v-text-field>
  </fragment>
</template>

<script>
export default {
  name: 'FormFields',
  props: {
    fields: Array,
  },
};
</script>

<style scoped>

</style>

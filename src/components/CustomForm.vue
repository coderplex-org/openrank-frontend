<template>
  <v-row align="start" justify="center">
    <v-col sm="7">
      <card>
        <template v-slot:title>{{ title }}</template>
        <v-form>
          <form-alerts :alerts="alerts"></form-alerts>
          <form-fields :fields="fields"></form-fields>
        </v-form>
        <template v-slot:actions>
          <form-buttons :buttons="buttons"></form-buttons>
        </template>
      </card>
    </v-col>
  </v-row>
</template>

<script>
import {
  Card,
  FormFields,
  FormAlerts,
  FormButtons,
} from '.';

export default {
  name: 'CustomForm',
  props: {
    title: String,
    alerts: Array,
    fields: Array,
    buttons: Array,
  },
  components: {
    Card,
    FormFields,
    FormAlerts,
    FormButtons,
  },
};
</script>

<style scoped>

</style>

<template>
  <v-row align="start" justify="center">
    <v-col sm="7">
      <card>
        <template v-slot:title>Login</template>
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
import { createNamespacedHelpers } from 'vuex';

import {
  Card,
  FormFields,
  FormAlerts,
  FormButtons,
} from '../components';

const { mapState, mapMutations, mapActions } = createNamespacedHelpers('authentication/login');

export default {
  name: 'Login',
  data() {
    return {
    };
  },
  computed: {
    ...mapState([
      'email',
      'password',
      'successMsg',
    ]),
    alerts() {
      return [
        {
          type: 'success',
          message: this.successMsg,
        },
      ];
    },
    fields() {
      return [
        {
          label: 'Email',
          placeholder: 'Enter Email',
          type: 'email',
          icon: 'mdi-email',
          value: this.email,
          input: this.setEmail,
        },
        {
          label: 'Password',
          placeholder: 'Enter Password',
          type: 'password',
          icon: 'mdi-lock',
          value: this.password,
          input: this.setPassword,
        },
      ];
    },
    buttons() {
      return [
        {
          icon: 'mdi-fingerprint',
          value: 'Login',
          click: this.login,
        },
      ];
    },
  },
  methods: {
    ...mapMutations([
      'setEmail',
      'setPassword',
    ]),
    ...mapActions([
      'login',
    ]),
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

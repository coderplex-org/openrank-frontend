<template>
  <v-row align="start" justify="center">
    <v-col sm="7">
      <card>
        <template v-slot:title>Register</template>
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

const { mapState, mapMutations, mapActions } = createNamespacedHelpers('authentication/register');

export default {
  name: 'Register',
  data() {
    return {
    };
  },
  computed: {
    ...mapState([
      'name',
      'email',
      'password',
      'passwordConfirmed',
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
          label: 'Name',
          placeholder: 'Enter your name',
          type: 'text',
          icon: 'mdi-rename-box',
          value: this.name,
          input: this.setName,
        },
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
        {
          label: 'Confirm Password',
          placeholder: 'Re Enter Password',
          type: 'password',
          icon: 'mdi-lock',
          value: this.passwordConfirmed,
          input: this.setPasswordConfirmed,
        },
      ];
    },
    buttons() {
      return [
        {
          icon: 'mdi-account',
          value: 'Register',
          click: this.register,
        },
      ];
    },
  },
  methods: {
    ...mapMutations([
      'setName',
      'setEmail',
      'setPassword',
      'setPasswordConfirmed',
    ]),
    ...mapActions([
      'register',
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

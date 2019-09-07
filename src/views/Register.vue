<template>
  <v-row align="start" justify="center">
    <v-col sm="7">
      <card>
        <template v-slot:title>Register</template>
        <v-form>
          <form-alerts :alerts="alerts"></form-alerts>
          <text-fields :fields="fields"></text-fields>
        </v-form>
        <template v-slot:actions>
          <v-btn
            color="deep-purple accent-4"
            text
            @click="register"
          >
            <v-icon left>mdi-account</v-icon>
            Register
          </v-btn>
        </template>
      </card>
    </v-col>
  </v-row>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import { Card, TextFields, FormAlerts } from '../components';

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
          placeholder: 'Enter your email address',
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
    TextFields,
    FormAlerts,
  },
};
</script>

<style scoped>

</style>

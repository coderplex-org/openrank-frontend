<template>
  <custom-form title="Login" :alerts="alerts" :fields="fields" :buttons="buttons"></custom-form>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { CustomForm } from '../components';

const { mapState, mapMutations, mapActions } = createNamespacedHelpers('authentication/login');
const { mapGetters } = createNamespacedHelpers('authentication/user');

export default {
  name: 'Login',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ]),
    ...mapState([
      'email',
      'password',
      'successMsg',
      'errorMsg',
    ]),
    alerts() {
      return [
        {
          type: 'success',
          message: this.successMsg,
        },
        {
          type: 'error',
          message: this.errorMsg,
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
          onClick: this.login,
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
  mounted() {
    if (this.isLoggedIn) {
      return this.$router.push('/profile');
    }
  },
  components: {
    CustomForm,
  },
};
</script>

<style scoped>

</style>

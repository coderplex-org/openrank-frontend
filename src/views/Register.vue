<template>
  <custom-form title="Login" :alerts="alerts" :fields="fields" :buttons="buttons"></custom-form>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { CustomForm } from '../components';

const { mapState, mapMutations, mapActions } = createNamespacedHelpers('authentication/register');
const { mapGetters } = createNamespacedHelpers('authentication/user');

export default {
  name: 'Register',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ]),
    ...mapState([
      'name',
      'email',
      'password',
      'passwordConfirmed',
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
          onClick: this.register,
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

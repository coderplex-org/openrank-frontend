<template>
  <custom-form title="Update Profile" :alerts="alerts" :fields="fields" :buttons="buttons">
  </custom-form>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { CustomForm } from '../components';

const {
  mapState,
  mapMutations,
  mapActions,
  mapGetters,
} = createNamespacedHelpers('authentication/user');

export default {
  name: 'Profile',
  data() {
    return {
    };
  },
  computed: {
    ...mapState([
      'id',
      'name',
      'email',
      'password',
      'successMsg',
      'errorMsg',
    ]),
    ...mapGetters([
      'isLoggedIn',
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
      ];
    },
    buttons() {
      return [
        {
          icon: 'mdi-account',
          value: 'Update Profile',
          onClick: this.updateUser,
        },
      ];
    },
  },
  methods: {
    ...mapMutations([
      'setName',
      'setEmail',
      'setPassword',
    ]),
    ...mapActions([
      'fetchUser',
      'updateUser',
    ]),
  },
  mounted() {
    if (!this.isLoggedIn) {
      return this.$router.push('/login');
    }
    this.$store.dispatch('authentication/user/fetchUser');
  },
  components: {
    CustomForm,
  },
};
</script>

<style scoped>

</style>

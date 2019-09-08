<template>
  <custom-form title="Profile" :alerts="alerts" :fields="fields" :buttons="buttons"></custom-form>
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
      'successMsg',
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
      ];
    },
    buttons() {
      return [
        {
          icon: 'mdi-account',
          value: 'Update',
          click: this.updateUser,
        },
      ];
    },
  },
  methods: {
    ...mapMutations([
      'setName',
      'setEmail',
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
    this.$store.dispatch('authentication/fetchUser');
  },
  components: {
    CustomForm,
  },
};
</script>

<style scoped>

</style>

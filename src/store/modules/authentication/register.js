import HTTP from '../../../http';

export default {
  namespaced: true,
  strict: true,
  state: {
    name: null,
    email: null,
    password: null,
    passwordConfirmed: null,
    successMsg: null,
    errorMsg: null,
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setEmail(state, email) {
      state.email = email;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setPasswordConfirmed(state, passwordConfirmed) {
      state.passwordConfirmed = passwordConfirmed;
    },
    setSuccessMsg(state, message) {
      state.successMsg = message;
    },
    setErrorMsg(state, message) {
      state.errorMsg = message;
    },
  },
  actions: {
    async register({
      commit,
      rootGetters,
      state: {
        name,
        email,
        password,
        // eslint-disable-next-line camelcase
        passwordConfirmed: password_confirmed,
      },
    }) {
      await HTTP().post('users', {
        name,
        email,
        password,
        password_confirmed,
      }).then(({ data: { message } }) => {
        commit('setSuccessMsg', message);
        setTimeout(() => commit('setSuccessMsg', null), 2000);
      }).catch(({ response }) => {
        commit('setErrorMsg', rootGetters.getErrorMessage(response));
        setTimeout(() => commit('setErrorMsg', null), 2000);
      });
    },
  },
};

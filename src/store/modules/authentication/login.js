import HTTP from '../../../http';
import router from '../../../router';

export default {
  namespaced: true,
  strict: true,
  state: {
    email: '',
    password: '',
    successMsg: '',
    errorMsg: null,
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setSuccessMsg(state, message) {
      state.successMsg = message;
    },
    setErrorMsg(state, message) {
      state.errorMsg = message;
    },
  },
  actions: {
    async login({
      commit,
      rootGetters,
      state: {
        email,
        password,
      },
    }) {
      await HTTP().post('/login', {
        email,
        password,
      }).then(({ data: { data: { token }, message } }) => {
        commit('authentication/user/setToken', token, { root: true });
        commit('setSuccessMsg', message);
        setTimeout(() => commit('setSuccessMsg', null), 2000);
        router.push('/').catch(() => {});
      }).catch(({ response }) => {
        commit('setErrorMsg', rootGetters.getErrorMessage(response));
        setTimeout(() => commit('setErrorMsg', null), 2000);
      });
    },
  },
};

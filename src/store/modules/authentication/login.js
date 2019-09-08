import HTTP from '../../../http';

export default {
  namespaced: true,
  strict: true,
  state: {
    email: '',
    password: '',
    successMsg: '',
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
  },
  actions: {
    async login({
      commit,
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
      });
    },
  },
};

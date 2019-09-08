import HTTP from '../../../http';

export default {
  namespaced: true,
  strict: true,
  state: {
    token: null,
    id: null,
    name: null,
    email: null,
    successMsg: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setId(state, id) {
      state.id = id;
    },
    setName(state, name) {
      state.name = name;
    },
    setEmail(state, email) {
      state.emeail = email;
    },
    setSuccessMsg(state, message) {
      state.successMsg = message;
    },
  },
  actions: {
    async fetchUser({ state: { token }, commit }) {
      await HTTP().get('/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(({ data: { data: { id, name, email }, message } }) => {
        commit('setId', id);
        commit('setName', name);
        commit('setEmail', email);
        commit('setSuccessMsg', message);
      });
    },
    async updateUser({
      state: {
        id,
        name,
        email,
        token,
      },
      commit,
    }) {
      await HTTP().post(`/users/${id}`, {
        id,
        name,
        email,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(({ data: { user, message } }) => {
        commit('setId', user.id);
        commit('setName', user.name);
        commit('setEmail', user.email);
        commit('setSuccessMSg', message);
      });
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
};

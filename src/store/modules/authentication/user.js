import HTTP from '../../../http';

function clearUser(commit) {
  commit('setId', null);
  commit('setName', null);
  commit('setEmail', null);
  commit('setPassword', null);
  commit('setSuccessMsg', false);
  commit('setErrorMsg', false);
}

export default {
  namespaced: true,
  strict: true,
  state: {
    token: null,
    id: null,
    name: null,
    email: null,
    password: null,
    successMsg: null,
    errorMsg: null,
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
    clearUser({ commit }) {
      clearUser(commit);
    },
    async fetchUser({ state: { token }, commit, rootGetters }) {
      await HTTP().get('/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(({ data: { data: { id, name, email }, message } }) => {
        commit('setId', id);
        commit('setName', name);
        commit('setEmail', email);
        commit('setSuccessMsg', message);
      }).catch(({ response }) => {
        commit('setErrorMsg', rootGetters.getErrorMessage(response));
        console.log(response);
      });
    },
    async updateUser({
      state: {
        id,
        name,
        email,
        password,
        token,
      },
      commit,
      rootGetters,
    }) {
      await HTTP().post(`/users/${id}`, {
        id,
        name,
        email,
        password,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(({ data: { user, message } }) => {
        commit('setId', user.id);
        commit('setName', user.name);
        commit('setEmail', user.email);
        commit('setSuccessMSg', message);
      }).catch(({ response }) => {
        commit('setErrorMsg', rootGetters.getErrorMessage(response));
        console.log(response);
      });
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
};

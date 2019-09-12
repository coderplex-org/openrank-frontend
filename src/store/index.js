import createLogger from 'vuex/dist/logger';
import createPersistedState from 'vuex-persistedstate';
import Vue from 'vue';
import Vuex from 'vuex';

import authentication from './modules/authentication';
import { Loading } from './plugins';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const plugins = debug ? [
  createLogger(),
  // createPersistedState(),
  Loading,
] : [
  createPersistedState(),
  Loading,
];

export default new Vuex.Store({
  state: {
    baseUrl: '/api',
    loading: false,
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
  },
  modules: {
    authentication,
  },
  getters: {
    isLoading(state) {
      return state.loading;
    },
    getErrorMessage: () => (response) => {
      console.log('HERE', response);
      const { status, data: { data: { errors } = {}, message } } = response;
      if (message) {
        return message;
      }
      if (status === 500) {
        return 'Internal Server Error: Please try again after some time.';
      }
      if (status === 400) {
        if (Array.isArray(errors)) {
          return errors.map(error => error.message).join(' + ');
        }
        return 'Bad Request: Check if all the fields are correctly entered';
      }
      return 'Something went wrong. Please try again after some time.';
    },
  },
  plugins,
});

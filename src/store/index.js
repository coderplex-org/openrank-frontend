import createLogger from 'vuex/dist/logger';
import createPersistedState from 'vuex-persistedstate';
import Vue from 'vue';
import Vuex from 'vuex';

import authentication from './modules/authentication';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const plugins = debug ? [
  createLogger(),
  // createPersistedState(),
] : [
  createPersistedState(),
];

export default new Vuex.Store({
  state: {
    baseUrl: '/api',
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    authentication,
  },
  plugins,
});

import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import { sync } from 'vuex-router-sync';
import { Plugin } from 'vue-fragment';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
sync(store, router);
Vue.use(Plugin);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');

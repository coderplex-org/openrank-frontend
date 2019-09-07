import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';
import Register from '../views/Register';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
});

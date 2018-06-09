import Vue from 'vue';
import Router from 'vue-router';
import index from '../views/index';
import categorymanage from '../views/categorymanage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      redirect: '/categorymanage',
      children: [
        {
          path: 'categorymanage',
          component: categorymanage
        }
      ]
    }
  ]
});

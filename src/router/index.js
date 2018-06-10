import Vue from 'vue';
import Router from 'vue-router';
import index from '../views/index';
import categorymanage from '../views/categorymanage';
import newcategory from '../views/newcategory';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      redirect: '/categorymanage',
      children: [
        {
          path: 'newcategory',
            component: newcategory

        },
        {
          path: 'categorymanage',
          component: categorymanage
        }
      ]
    }
  ]
});

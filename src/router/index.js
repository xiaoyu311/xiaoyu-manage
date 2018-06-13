import Vue from 'vue';
import Router from 'vue-router';
import index from '../views/index';
import categorymanage from '../views/categorymanage';
import newcategory from '../views/newcategory';
import newarticle from '../views/newarticle';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      redirect: '/newcategory',
      children: [
        {
          path: 'newcategory',
            component: newcategory

        },
        {
          path: 'categorymanage',
          component: categorymanage
        },
        {
          path: 'newarticle',
          component: newarticle
        }
      ]
    }
  ]
});

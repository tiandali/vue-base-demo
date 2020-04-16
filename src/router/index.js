import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router);

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('../views/login/index'),
    meta: {
      isLogin: false
    },
    hidden: true
  },
  {
    //注册
    path: '/register',
    component: () => import('../views/login/index'),
    meta: {
      isLogin: false
    }
  },
  {
    //首页
    path: '',
    component: () => import('../views/home'),
    meta: {
      isLogin: true
    },
    children: [
      {
        path: 'search',
        component: () => import('../views/queryEntity/SearchEntity')
      },
      {
        path: 'info',
        component: () => import('../views/queryEntity/EntityInfo')
      },
      {
        path: '/identifyEntity',
        component: () => import('../views/identifyEntity/IdentifyEntity'),
        meta: {
          isLogin: true
        },
      },
      {
        path: '/knowledgeOverview',
        component: () => import('../views/knowledgeOverview/KnowledgeSearch'),
        meta: {
          isLogin: true
        },
      },
      {
        path: '/overview',
        component: () => import('../views/knowledgeOverview/Overview'),
        meta: {
          isLogin: true
        },
      },
      {
        path: 'quiz',
        component: () => import('../views/errPage/404'),
        // component: () => import('../views/quiz/Quiz'),
        meta: {
          isLogin: true
        },

      }
    ]
  },

];

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
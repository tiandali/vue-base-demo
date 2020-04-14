import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.scss' // global css
import Cookies from 'js-cookie'
import App from './App.vue';
import store from './store'
import router from './router'

import './styles/common.scss';
Vue.use(Element)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from '@/common/store'
import router from '@/common/router.js'

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')

Vue.use(require('vue-moment'));

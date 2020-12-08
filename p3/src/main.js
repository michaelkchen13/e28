import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(VueRouter);

import HomePage from '@/components/pages/HomePage.vue';
import FavoritesPage from '@/components/pages/FavoritesPage.vue';
import NewSubjectPage from '@/components/pages/NewSubjectPage.vue';
import SubjectPage from '@/components/pages/SubjectPage.vue';


const router = new VueRouter({
  mode: 'history',
  routes: [
      { path: '/', component: HomePage },
      { path: '/favorites', component: FavoritesPage },
      { path: '/new', component: NewSubjectPage },
      { path: '/:id', component: SubjectPage, props: true },
  ],
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

Vue.use(require('vue-moment'));

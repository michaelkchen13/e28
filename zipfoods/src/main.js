import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from '@/store'


import HomePage from '@/components/pages/HomePage.vue';
import ProductsPage from '@/components/pages/ProductsPage.vue';
import CategoriesPage from '@/components/pages/CategoriesPage.vue';
import ProductPage from '@/components/pages/ProductPage.vue';
import ProductCreatePage from '@/components/pages/ProductCreatePage.vue';
import AccountPage from '@/components/pages/AccountPage.vue';


Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage },
        { path: '/products', component: ProductsPage },
        { path: '/categories', component: CategoriesPage },
        { path: '/products/new', component: ProductCreatePage },
        { path: '/products/:id', component: ProductPage, props: true },
        { path: '/account', component: AccountPage },
    ],
})

new Vue({
    store: store,
    router, // equivalent to router: router,
    render: h => h(App),
}).$mount('#app')
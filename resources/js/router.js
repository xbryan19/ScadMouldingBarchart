import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from './store';

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path: '*',
            name: 'not_found',
            component: () => import('./components/Notfound.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./components/Home.vue')
        },
        {
            path: '/hello',
            name: 'hello',
            component: () => import('./components/Hello.vue')
        },
    ],
    mode: 'history'
    
});

   
export default router


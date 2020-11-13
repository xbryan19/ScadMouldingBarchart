require('./bootstrap');
import Vue from 'vue';
import Vuetify from 'vuetify';
import router from './router';
import store from './store'
import App from './components/App.vue';
import VueIziToast from 'vue-izitoast'
import 'izitoast/dist/css/iziToast.css'
import 'izitoast/dist/css/iziToast.min.css'
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify, {
    icons: {
        iconfont: 'mdi',
    },
})
window.axios = require('axios');
Vue.use(VueIziToast)
const app = new Vue({
    el: '#app',
    router,
    store,
    vuetify: new Vuetify(),
    render: h=>h(App),
}).$mount('#app');

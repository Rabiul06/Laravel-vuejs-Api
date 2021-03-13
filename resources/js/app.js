
import Vue from 'vue';
require('./bootstrap');
import CxltToastr from 'cxlt-vue2-toastr'
Vue.use(CxltToastr)
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
var toastrConfigs = {
    position: 'top right',
    showDuration: 1000,
    timeOut: 5000,
    closeButton: true,
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
}
Vue.use(CxltToastr, toastrConfigs)
Vue.component('app-header', require('./components/Header.vue').default);

import routes from './router/index'

const app = new Vue({
    el: '#app',
    router:routes,
});

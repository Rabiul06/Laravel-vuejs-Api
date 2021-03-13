import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '../pages/Home.vue'
import categorylist from '../pages/category/index.vue'
import Create from '../pages/category/Create.vue'
import Edit from '../pages/category/edit.vue'
const routes = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            component: Home,
            name:'home',
        },
        {
            path:'/category',
            component: categorylist,
            name:'category',
        },
        {
            path:'/category/create',
            component: Create,
            name:'Create',
        },
        {
            path:'/category/edit',
            component: Edit,
            name:'edit',
        },
        
    ]
});
export default routes;
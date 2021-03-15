import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '../pages/Home.vue'
import categorylist from '../pages/category/index.vue'
import Create from '../pages/category/Create.vue'
import Edit from '../pages/category/edit.vue'
import productlist from '../pages/product/index.vue'
import Createproduct from '../pages/product/create.vue'
const routes = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
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
        {
            path:'/product',
            component: productlist,
            name:'productlist',
        },
        {
            path:'/product/create',
            component: Createproduct,
            name:'Createproduct',
        },
        // {
        //     path:'/product/edit',
        //     component: Editproduct,
        //     name:'editproduct',
        // },
        
    ]
});
export default routes;
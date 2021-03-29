// 入口js
import Vue from 'vue'
import App from './App.vue'
// 引入路由器
import router from './router'
import store from './store'
// 引入mock
import './mock/mockServer'//加载mockServer
new Vue({
    el:'#app',
    render:h=>h(App),
    router,//使用时vue-router
    store,//使用上vuex
})
// 入口js
import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
// 引入路由器
import router from './router'
import store from './store'
// 引入mock
import './mock/mockServer'//加载mockServer
import loading from './common/imgs/loading.gif'
// 加载过滤器：日期过滤器
import './filters'

Vue.use(VueLazyLoad,{ //内部自定义一个指令lazy: v-lazy
    loading
})
new Vue({
    el:'#app',
    render:h=>h(App),
    router,//使用时vue-router
    store,//使用上vuex
})
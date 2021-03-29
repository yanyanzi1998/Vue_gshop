<template>
  <div class="app">
    <router-view></router-view>
    <!-- $route代表当前路由 -->
    <FooterGuide v-show='$route.meta.showFooter'/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
import {Button} from 'mint-ui'
import Vue from 'vue'
// 注册全局组件标签
Vue.component(Button.name,Button)//<mt-button>
export default {
  components: {
    FooterGuide,
  },
  mounted(){
    // 发送异步请求方式一
    // this.$store.dispatch('getAddress')
    this.getAddress(),
    this.getUserInfo()
  },
  methods:{
    // 发送异步请求方式二
    ...mapActions(['getAddress','getUserInfo'])
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width: 100%;
    height: 100%;
    background: #f5f5f5;
</style>
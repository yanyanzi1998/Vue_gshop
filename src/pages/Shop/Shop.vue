<template>
  <div class="shop-wrapper">
      <div class="shop-content">
        <shop-header/>
        <div class="tab">
            <div class="tab-item">
              <!-- 使用replace实现路由跳转 -->
                <router-link to="/shop/goods" replace>点餐</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/shop/ratings" replace>评价</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/shop/info" replace>商家</router-link>
            </div>
        </div>
        <!-- 不使用缓存在切换路由时组件会重新加载，而购物车组件不会重新加载，造成购物车列表与列表的数量不一致 -->
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
  </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
export default {
  mounted(){
    this.$store.dispatch('getShopInfo')
  },
    components:{
        ShopHeader
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .shop-wrapper
    .shop-content
      .tab
        height 40px
        line-height 40px
        background #fff
        position relative
        z-index 10
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        .tab-item
          float left
          width: 33.33333%
          text-align center
          font-size 14px
          color rgb(77, 85, 93)
          a
            display block
            position relative
            text-decoration none
            color rgb(77, 85, 93)
            &.router-link-active
              color #02a774
              &::after
                content ''
                position absolute
                left 50%
                bottom 1px
                width 35px
                height 2px
                transform translateX(-50%)
                background #02a774
</style>

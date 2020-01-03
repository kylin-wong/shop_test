<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="/home" to="/home" icon="wap-home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="/member" to="/member" icon="user-o"
        >会员</van-tabbar-item
      >
      <van-tabbar-item
        name="/shopcar"
        to="/shopcar"
        icon="shopping-cart-o"
        :info="$store.state.shopId.length"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item name="/search" to="/search" icon="search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {
    active: {
      get: function() {
        return this.$store.state.toUrl
      },
      set: function(newval) {
        this.$store.commit('setToUrl', newval)
      }
    }
  },
  watch: {}
}
</script>

<style lang="less" scoped>
.van-tabbar-item {
  font-size: 12px;
}
</style>

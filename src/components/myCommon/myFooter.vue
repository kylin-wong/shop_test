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
  created() {
    console.log(this.$route, 111)
  },
  methods: {},
  computed: {
    active: {
      get: function() {
        if (this.$route.path === '/add') {
          return '/search'
        }
        if (
          this.$route.matched[0].path === '/newlist' ||
          this.$route.matched[0].path === '/detail/:id' ||
          this.$route.matched[0].path === '/photo/list' ||
          this.$route.matched[0].path === '/photo/info/:id' ||
          this.$route.matched[0].path === '/home/goods' ||
          this.$route.matched[0].path === '/buyGoods'
        ) {
          return '/home'
        }
        return this.$store.state.toUrl
      },
      set: function(newval) {
        console.log(newval)
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

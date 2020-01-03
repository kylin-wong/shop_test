<template>
  <div>
    <van-tabbar v-model="active" @change="tabChange">
      <van-tabbar-item name="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item name="/member" icon="user-o">会员</van-tabbar-item>
      <van-tabbar-item name="/shopcar" icon="shopping-cart-o" info="0">购物车</van-tabbar-item>
      <van-tabbar-item name="/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      active: '/home'
    }
  },
  created() {
    console.log(this.$route.fullPath)
  },
  methods: {
    ...mapMutations(['getUrl']),
    tabChange() {
      console.log(this.active)
      this.$router.push(this.active)
    }
  },
  computed: {
    ...mapState(['url']),
    theroute() {
      this.getUrl(this.$route.fullPath)
      return this.$route.fullPath
    }
  },
  watch: {
    url() {
      this.active = this.url
    }
  }
}
</script>

<style lang="less" scoped>
.van-tabbar-item {
  font-size: 12px;
}
</style>

<template>
  <div>
    <van-row>
      <van-col :span="24">
        <van-nav-bar title="黑马程序员.vant" :fixed="true" :left-text="$store.state.url === '/home' ? '' : '返回'" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import {} from 'vuex'
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1)
      this.$store.commit('getUrl', this.$route.fullPath)
    },
    onClickRight() {}
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  width: 100%;
  text-align: center;
  height: 40px;
  background-color: #1989fa;
}
.van-nav-bar__title,
.van-nav-bar__text {
  line-height: 40px;
  color: #fff;
  font-size: 14px;
}
</style>

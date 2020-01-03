<template>
  <div>
    <van-icon name="setting-o" />
    <p>正在加班加点开发中,敬请期待!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
div {
  text-align: center;
  color: black;
  margin-top: 15px;
}
/* 图标要使用动画 */
.van-icon {
  font-size: 25px;
  animation: move 2s linear 0s infinite normal none running;
}
/* 调用动画,旋转 */
@keyframes move {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div>
    <!-- 标签页 -->
    <van-tabs line-width="30px"  v-model="active">
      <van-tab v-for="index in 12" :title="'标签 ' + index" :key="index">
        <!-- <div slot="title"><van-icon name="more-o" />选项</div> -->
        <van-image width="100%" height="50%" src="https://img.yzcdn.cn/vant/cat.jpeg" lazy-load />
      </van-tab>
    </van-tabs>
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
.van-image {
  padding: 10px;
  border-radius: 20px;
}
</style>

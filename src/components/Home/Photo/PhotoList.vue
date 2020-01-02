<template>
  <div>
    <!-- 标签页 -->
    <van-tabs line-width="30px" swipeable :duration="0.2" v-model="activeName">
      <van-tab v-for="index in 12" :title="'全部'" :key="index" :name="index">
        <!-- <div slot="title"><van-icon name="more-o" />选项</div> -->
        <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" lazy-load fit="contain" radius="40px" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 0,
      PhotoListInfo: {}
    }
  },
  created() {
    this.getImgCategory()
  },
  methods: {
    // 获取图片分类信息
    async getImgCategory() {
      const { data: res } = await this.$http.get(`/api/getimgcategory`)
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.van-image {
  padding: 10px;
}
</style>

<template>
  <div>
    <!-- 标签页 -->
    <van-tabs line-width="40px" swipeable :duration="0.2">
      <van-tab v-for="item in ImgCategory" :title="item.title" :key="item.id"> </van-tab>
      <!-- 图片区域 -->
      <ul class="img_list">
        <li v-for="item in getImges" :key="item.id" class="box">
          <van-image width="100%" height="300px" :src="item.img_url" lazy-load fit="cover" radius="5px"> </van-image>
          <div class="botInfo">
            <p>{{ item.title }}</p>
            <p>{{ item.zhaiyao }}</p>
          </div>
        </li>
      </ul>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 0,
      ImgCategory: [],
      getImges: [],
      cateId: 0
    }
  },
  created() {
    this.getImgCategory()
    this.getImages()
  },
  methods: {
    // 获取图片分类信息
    async getImgCategory() {
      const { data: res } = await this.$http.get(`/api/getimgcategory`)
      if (res.status !== 0) {
        this.Notify({ type: 'warning', message: '图片分类信息获取失败!' })
      }
      res.message.unshift({ title: '全部', id: 0 })
      // 将图片分类信息给data的对象
      this.ImgCategory = res.message
      // console.log(this.ImgCategory)
    },
    async getImages() {
      const { data: res } = await this.$http.get(`/api/getimages/${this.cateId}`)
      this.getImges = res.message
      console.log(res.message)
    }
  }
}
</script>

<style lang="less" scoped>
.img_list {
  padding: 0 10px;
}
.img_list .li {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  height: 300px;
  min-height: 200px;
  position: relative;
}
.box {
  position: relative;
  margin: 10px;
}

.botInfo {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  height: 75px;
}
.botInfo p {
  margin-top: 1px;
  margin-left: 10px;
  margin-bottom: 5px;
  font-size: 12px;
}
</style>

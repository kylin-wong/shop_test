<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.img" class="myimg" />
      </van-swipe-item>
    </van-swipe>
    <!-- 九宫格 -->
    <van-grid :column-num="3" :border="false" square>
      <van-grid-item v-for="item in menu" :key="item.index" :text="item.text" :to="item.to">
        <template slot="icon">
          <div>
            <img :src="require(`@/assets/fpic/${item.pic}`)" />
          </div>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      menu: [
        { text: '新闻资讯', pic: 'menu1.png', to: '/newlist' },
        { text: '图片分享', pic: 'menu2.png', to: '/photo/list' },
        { text: '商品购买', pic: 'menu3.png', to: '/goods' },
        { text: '留言反馈', pic: 'menu4.png' },
        { text: '视频专区', pic: 'menu5.png' },
        { text: '联系我们', pic: 'menu6.png' }
      ]
    }
  },
  created() {
    this.getLunbo()
  },
  methods: {
    async getLunbo() {
      const { data: res } = await this.$http.get('api/getlunbo')
      this.images = res.message
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.van-swipe {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #eee;
}
.myimg {
  width: 100%;
  height: 200px;
}
.van-grid-item img {
  width: 60px;
  height: 60px;
  padding-bottom: 8px;
}
</style>

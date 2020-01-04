<template>
  <div>
    <!-- 头部
    <div></div> -->
    <!-- 卡片区域 -->
    <van-loading
      size="24px"
      vertical
      type="spinner"
      color="#1989fa"
    ></van-loading>
    <!-- 上拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 下拉刷新 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        class="onloading"
      >
        <!-- <div slot="default"></div> -->

        <div v-for="(item, index) in getnewlist" :key="index">
          <van-card
            class="crad-caint"
            currency=""
            :title="item.title"
            @click="handel(item.id)"
            :lazy-load="true"
          >
            <div slot="thumb" class="card-box">
              <img class="card-img" :src="item.img_url" alt="" />
            </div>
            <div slot="price" class="color">
              发布时间:{{ item.add_time | dataFormat }}
            </div>
            <div slot="num" class="color">点击:{{ item.click }}</div>
          </van-card>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 获取新闻的所有数据
      getnewlist: [],
      isLoading: false,
      finished: false,
      loading: false
    }
  },
  created() {
    this.getNewlist()
    setTimeout(() => {
      const load = document.querySelector('.van-loading')
      load.style.display = 'none'
    }, 500)
  },

  methods: {
    // 发起请求获取新闻的数据
    async getNewlist() {
      const { data: res } = await this.$http.get('/api/getnewslist')

      console.log(res)
      if (res.status !== 0) {
        return false
      }
      this.getnewlist = res.message
      console.log(res.message)
    },
    // 点击卡片让他跳转到响应的地方
    handel(id) {
      // console.log(id)
      this.$router.push('/detail/' + id)
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
      }, 1000)
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.finished = true
        this.getNewlist()
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
.newbox {
  height: 800px;
}
.van-card {
  background: #fff;
  border-bottom: 1px solid #eee;
  margin: 0 10px;
  padding: 10px;
  color: #323233;
  font-size: 12px;
}
.van-card__title {
  font-size: 14px;
  font-weight: 550;
  color: #000;
}
.card-img {
  width: 80%;
  height: 80%;
}
.color {
  color: #ccc;
}
.van-card__header,
.van-card__thumb {
  display: flex;
  align-items: center;
}
.van-card__thumb,
.van-card__header {
  margin-right: 0;
  height: 50%;
}
.van-card__content {
  display: flex;
  min-height: 50px;
  height: 50%;
  justify-content: space-around;
}
.van-list {
  margin-bottom: 40px;
}
</style>

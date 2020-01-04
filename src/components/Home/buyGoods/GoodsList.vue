<template>
  <div>
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :offset="10"
        :immediate-check="false"
      >
        <!-- 主体内容 -->
        <van-grid :gutter="20" :column-num="2" border id="app">
          <van-grid-item
            v-for="value in goodsAllList"
            :key="value.id"
            :to="{ path: '/buyGoods', query: { id: value.id } }"
          >
            <div class="box">
              <van-image :src="value.img_url" />
            </div>
            <p>{{ value.title }}</p>
            <div class="footer">
              <van-row type="flex" justify="space-around">
                <van-col span="10">
                  <span class="sell_price">￥{{ value.sell_price }}</span>
                </van-col>
                <van-col span="10">
                  <span class="market_price">￥{{ value.market_price }}</span>
                </van-col>
              </van-row>
              <van-row type="flex" justify="space-around">
                <van-col span="9">
                  <span class="cell">热卖中</span>
                </van-col>
                <van-col span="11">
                  <span class="num">剩余60件</span>
                </van-col>
              </van-row>
            </div>
          </van-grid-item>
        </van-grid>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsAllList: [],
      curentPage: 1,
      isLoading: false,
      loading: false,
      finished: false
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    // 获取商品列表
    async getGoodsList() {
      const { data: res } = await this.$http.get(
        `/api/getgoods?pageindex=${this.curentPage}`
      )
      res.message.forEach(item => this.goodsAllList.push(item))
      console.log(res)
    },
    // 刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
      }, 500)
    },
    // 上滑加载
    onLoad() {
      setTimeout(() => {
        this.curentPage++
        this.finished = true
        this.getGoodsList()
      }, 500)
    }
  }
}
</script>

<style scoped lang="less">
.van-pull-refresh {
  margin: 20px 0 50px;
}
.van-grid-item {
  position: relative;
  height: 350px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #eee;
}
.sell_price {
  color: red;
}
.market_price {
  font-size: 12px;
  text-decoration: line-through;
}
.cell {
  font-size: 15px;
}
.num {
  font-size: 12px;
}
#app {
  color: #000;
}
.van-image__img {
  margin-left: 50px;
  max-height: 300px !important;
}
</style>

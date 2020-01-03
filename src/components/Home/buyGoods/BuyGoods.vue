<template>
  <div>
    <van-row>
      <van-col span="24" class="shop_img">
        <van-image :src="goodsMessage.thumb_path" width="100%" height="100%" radius="5px" />
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24">
        <div class="buy_shop">
          <h4>{{ShopInfo.title}}</h4>
          <div class="price_num">
            <p>市场价： <s>{{'￥' + ShopInfo.market_price}}</s> 销售价： <span>{{'￥' + ShopInfo.sell_price}}</span></p>
            <div class="buy_num">
              <span>购买数量</span>
              <van-stepper :value="shopNum" min="0" @change="addShopNum" />
            </div>
          </div>
          <van-button type="info" size="small">立即购买</van-button>
          <van-button type="danger" size="small" @click="addCar(ShopInfo.id)">加入购物车</van-button>
        </div>
      </van-col>
    </van-row>
    <van-row>
      <van-col :span="24">
        <div class="arguments">
          <h4>商品参数</h4>
          <ul>
            <li><span>商品货号:</span>{{ShopInfo.goods_no}}</li>
            <li><span>库存情况:</span>{{ShopInfo.stock_quantity}}件</li>
            <li><span>上架时间:</span>{{ShopInfo.add_time}}</li>
          </ul>
          <button class="introduce" @click="skipIntroduce(ShopInfo.id)">图文介绍</button>
          <button class="comment" @click="skipComment(ShopInfo.id)">商品评论</button>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsMessage: {},
      shopNum: '',
      ShopInfo: {}
    }
  },
  created() {
    this.getshopcarlist()
    this.getShopInfo()
  },
  methods: {
    async getshopcarlist() {
      const { data: res } = await this.$http.get('api/goods/getshopcarlist/87')
      this.goodsMessage = res.message[0]
    },
    addShopNum(event) {
      this.shopNum = event
    },
    async getShopInfo() {
      const { data: res } = await this.$http.get('api/goods/getinfo/87')
      this.ShopInfo = res.message[0]
      console.log(this.ShopInfo)
    },
    addCar(id) {
      console.log(id)
      this.$store.commit('carList', id)
      this.$toast.success('已加入购物车')
    },
    skipIntroduce(id) {
      this.$router.push({
        path: './home',
        query: {
          id: id
        }
      })
    },
    skipComment(id) {
      this.$router.push({
        path: './myComment',
        query: {
          id: id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.van-col {
    padding: 15px 6px 0;
}
.van-image {
    border: 1px solid #ccc;
}
.van-image {
    vertical-align: middle;
}
.buy_shop {
    border-radius: 5px;
    padding: 20px 15px;
    border: 1px solid #ccc;
}
.buy_shop h4 {
    margin: 0;
    border-bottom: 1px solid #ccc;
    color: #5d5d5d;
}
.price_num {
    padding: 15px 10px 0;
    color: #818181;
}
.price_num span {
    flex: 1;
    line-height: 28px;
    margin-right: 10px;
    color: #b0443f;
}
.van-stepper {
    flex: 3;
}
.price_num p {
    margin: 0;
}
.buy_num {
    display: flex;
    padding: 15px 0;
}
.van-button {
    margin-right: 10px;
}
.arguments {
    padding: 15px 15px 0;
    border: 1px solid #ccc;
    color: #818181;
}
.arguments h4 {
    margin: 0;
    padding: 0 0 10px;
    border-bottom: 1px solid #ccc;
    color: #5d5d5d;
}
.arguments ul {
    padding: 15px 10px;
    border-bottom: 1px solid #ccc;
}
.arguments ul span {
    margin-right: 10px;
}
.arguments ul li {
    margin: 10px 0;
}
.arguments button {
    margin: 10px 0 0 0;
    width: 100%;
    line-height: 36px;
    background-color: #fff;
    border-radius: 5px;
}
.arguments button:active {
    background-color: #eee;
}
.arguments .introduce {
    border: 1px solid #1989fa;
    color: #1989fa;
}
.arguments .comment {
    border: 1px solid #ee0a24;
    margin-bottom: 15px;
    color: #ee0a24;
}
</style>

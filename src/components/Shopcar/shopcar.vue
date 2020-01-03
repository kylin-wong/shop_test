<template>
  <div>
    <div v-if="list.length !== 0">
      <van-card
        v-for="(item, index) in list"
        :key="item.id"
        :num="numList[index]"
        :price="item.sell_price | myfilter"
        :title="item.title"
        :thumb="item.thumb_path"
      >
        <div slot="footer">
          <van-button
            round
            size="mini"
            @click="numList[index] == 1 ? confirm(item) : numList[index]--"
            >-</van-button
          >
          <span>{{ numList[index] }}</span>
          <van-button round size="mini" @click="numList[index]++">+</van-button>
        </div>
      </van-card>
    </div>
    <van-divider v-if="list.length === 0" class="box"
      ><div slot="default">请添加商品</div></van-divider
    >
    <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit">
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      checked: false,
      idList: '',
      numList: []
    }
  },
  created() {
    this.idList = this.$store.state.shopId.reduce((p, c, i, arr) => {
      return p + ',' + c.id
    }, '')
    this.$store.state.shopId.map((item, index) => {
      this.numList.push(item.num)
    })
    console.log(this.numList)
    this.get()
  },
  methods: {
    async get() {
      let { data: res } = await this.$http.get(
        `api/goods/getshopcarlist/${this.idList}`
      )
      if (res.status !== 0) {
        return this.$message({ type: 'error', message: '获取失败' })
      }
      this.list = res.message
      console.log(res)
    },
    confirm(con) {
      this.Dialog.confirm({
        title: '标题',
        message: '确定要删除吗？'
      })
        .then(() => {
          // on confirm
          let i = this.list.findIndex(item => item === con)
          this.list.splice(i, 1)
        })
        .catch(() => {
          // on cancel
        })
    },
    // 提交订单
    onSubmit() {}
  },
  computed: {
    // 总价
    price() {
      return (
        this.list.reduce((p, c) => {
          return p + c.sell_price * c.cou
        }, 0) * 100
      )
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.box {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
</style>

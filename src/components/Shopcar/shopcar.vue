<template>
  <div>
    <van-card v-for="(item) in list"
              :key="item.id"
              :num="item.cou"
              :price="item.sell_price | my-filter"
              desc="描述信息"
              :title="item.title"
              thumb="item.thumb_path">
      <div slot="tags">
        <van-tag plain
                 type="danger">标签</van-tag>
        <van-tag plain
                 type="danger">标签</van-tag>
      </div>
      <div slot="footer">
        <van-button round
                    size="mini"
                    @click="item.cou == 1 ? confirm(item):item.cou--">-</van-button>
        <span>{{item.cou}}</span>
        <van-button round
                    size="mini"
                    @click="item.cou++">+</van-button>
      </div>
    </van-card>
    <van-submit-bar :price="price"
                    button-text="提交订单"
                    @submit="onSubmit">
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      checked: false,
      idList: ''
    }
  },
  created () {
    this.idList = this.$store.state.shopId.join(',')
    this.get()
  },
  methods: {
    async get () {
      let { data: res } = await this.$http.get(`api/goods/getshopcarlist/${this.idList}`)
      if (res.status !== 0) return this.$message({ type: 'error', message: '获取失败' })
      this.list = res.message
      console.log(res)
    },
    confirm (con) {
      this.Dialog.confirm({
        title: '标题',
        message: '确定要删除吗？'
      }).then(() => {
        // on confirm
        let i = this.list.findIndex(item => item === con)
        this.list.splice(i, 1)
      }).catch(() => {
        // on cancel
      })
    },
    // 提交订单
    onSubmit () {

    }
  },
  computed: {
    // 总价
    price () {
      return (this.list.reduce((p, c) => {
        return p + c.sell_price * c.cou
      }, 0)) * 100
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
</style>

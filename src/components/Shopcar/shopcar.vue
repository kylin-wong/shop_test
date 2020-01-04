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
            @click="$store.state.shopId[index].num == 1 ? confirm(item) : $store.state.shopId[index].num--"
            >-</van-button
          >
          <span>{{ $store.state.shopId[index].num }}</span>
          <van-button round size="mini" @click="$store.state.shopId[index].num++"
            >+</van-button
          >
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
import { mapMutations, mapState } from 'vuex'
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
    console.log('====================================')
    console.log(this.$store.state.shopId)
    console.log(this.$store.state.shop)
    console.log('====================================')
    this.idList = this.$store.state.shopId.reduce((p, c, i, arr) => {
      return p + ',' + c.id
    }, '')
    this.getNumList()
    console.log(this.numList)
    this.get()
  },
  methods: {
    ...mapMutations(['addnum', 'cutnum', 'delstate']),
    add(id, i) {
      console.log(this.shopId)
      console.log(this.list)
      console.log(id)
      this.addnum(id)
      // this.getNumList()
    },
    cut(id, index) {
      this.cutnum(id)
      this.getNumList()
    },
    getNumList() {
      this.numList = []
      this.$store.state.shopId.map((item, index) => {
        this.numList.push(item.num)
      })
    },
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
    de(i) {
      this.$store.commit('delstate', i)
    },
    confirm(con) {
      // let that = this
      this.Dialog.confirm({
        title: '标题',
        message: '确定要删除吗？'
      })
        .then(() => {
          // on confirm
          let i = this.list.findIndex(item => item === con)
          console.log(i)
          this.list.splice(i, 1)
          // this.delstate(i)
          // this.$store.commit('delstate', i)
          // this.de(i)
          // todo
          this.$store.state.shopId.splice(i, 1)
          console.log(2)
          this.idList = this.$store.state.shopId.reduce((p, c, i, arr) => {
            return p + ',' + c.id
          }, '')
        })
        .catch(() => {
          // on cancel
        })
    },
    // 提交订单
    onSubmit() {}
  },
  computed: {
    // num
    ...mapState(['shopId']),
    // 总价
    price() {
      return (
        this.list.reduce((p, c, i, arr) => {
          return p + c.sell_price * this.numList[i]
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

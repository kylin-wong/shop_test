<template>
  <div>
    <div v-for="(item, index) in GoodsDescList" :key="index">
      <h4>{{ item.title }}</h4>
      <hr />
      <div class="box">
        <p v-html="item.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      GoodsDescList: [],
      cateId: ''
    }
  },
  created() {
    this.getGoodsDesc()
  },
  methods: {
    async getGoodsDesc() {
      const id = this.$route.query
      console.log(id)
      this.cateId = this.$route.params.id
      const { data: res } = await this.$http.get(
        `/api/goods/getdesc/${this.cateId}`
      )
      console.log(res)
      if (res.status !== 0) {
        return this.$toast.fail('获取失败!')
      }
      res.message[0].content = res.message[0].content.replace(/br/g, 'p')
      this.GoodsDescList = res.message
      console.log(res.message)
    }
  }
}
</script>

<style lang="less" scoped>
h4 {
  font-size: 16px;
  color: #226aff;
  text-align: center;
  margin: 15px 0;
}

.box {
  overflow: hidden;
  margin: 0 5px;
}
</style>

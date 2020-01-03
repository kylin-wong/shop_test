<template>
  <div>
    <div v-for="(item, index) in GoodsDescList" :key="index">
      <h4>{{ item.title }}</h4>
      <hr />
      <div>
        <p v-html="item.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 87,
      GoodsDescList: []
    }
  },
  created() {
    this.getGoodsDesc()
  },
  methods: {
    async getGoodsDesc() {
      const id = this.$route.query
      console.log(id)
      const { data: res } = await this.$http.get(
        `/api/goods/getdesc/${this.id}`
      )
      console.log(res)
      if (res.status !== 0) {
        return this.$message.error('获取失败!')
      }
      this.GoodsDescList = res.message
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
</style>

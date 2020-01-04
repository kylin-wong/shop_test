<template>
  <div>
    <van-row class="inputRow">
      <van-cell-group>
        <van-field v-model="vas" placeholder="请输入商品名" />
      </van-cell-group>
    </van-row>
    <van-row>
      <van-col :span="24">
        <van-button type="info" @click="addgoods">信息按钮</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vas: ''
    }
  },
  created() {},
  methods: {
    async addgoods() {
      if (this.vas.trim().length === 0) {
        return this.$toast.fail('请输入内容')
      }
      let params = new URLSearchParams()
      params.append('name', this.vas.trim())
      let { data: res } = await this.$http.post(`api/addproduct`, params)
      console.log(res)
      console.log(this.vas)
      this.vas = ''
      if (res.status !== 0) {
        return this.$toast.fail('添加失败')
      }
      this.$toast.success('添加成功')
    }
  }
}
</script>

<style lang="less" scoped>
.van-button {
  margin-top: 50px;
  width: 100%;
}
</style>

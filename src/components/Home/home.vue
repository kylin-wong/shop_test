<template>
  <div>
    搜索列表
  </div>
</template>

<script>
export default {

  data () {
    return {
    }
  },

  methods: {
    async getlist() {
      console.log('nihao');
      
      var res = await this.axios.get('/api/getprodlist')

      
      console.log(res)
    }
  },

  created () {
    this.getlist()
  }
}
</script>

<style lang='less' scoped>

</style>

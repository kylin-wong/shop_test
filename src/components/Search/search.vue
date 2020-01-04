<template>
  <div>
    <van-row>
      <van-col span="24">
        <form action="/">
          <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
      </van-col>
    </van-row>
    <van-row v-if="history">
      <van-col class="history" :span="24">
        <div>搜索历史</div>
        <i class="iconfont icon-delete" @click="del"></i>
      </van-col>
    </van-row>
    <van-row v-if="history">
      <van-col class="tag">
        <van-tag plain v-for="(item, index) in list" :key="index">{{
          item
        }}</van-tag>
      </van-col>
    </van-row>
    <van-row class="nolist">
      <van-divider v-if="list.length === 0">暂无搜索历史</van-divider>
    </van-row>
    <van-row>
      <van-col :span="24">
        <van-cell-group v-if="content">
          <van-cell
            :title="item.name"
            @click="delgoods(item.id)"
            v-for="item in search"
            :key="item.id"
            :value="item.ctime | my-date"
          />
        </van-cell-group>
      </van-col>
    </van-row>
    <van-row class="nolist">
      <van-divider v-if="search.length === 0">暂无搜索历史</van-divider>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      list: [],
      history: true,
      search: ['  '],
      content: false,
      str: '商品上传时间'
    }
  },
  created() {},
  methods: {
    delgoods(id) {
      console.log('====================================')
      console.log(id)
      console.log('====================================')
      this.Dialog.confirm({
        title: '提示',
        message: '是否确认删除 ？ '
      })
        .then(async () => {
          // on confirm
          let { data: res } = await this.$http.get(`api/delproduct/${id}`)
          console.log(res.data)
          console.log(res.meta)
          this.get()
        })
        .catch(() => {
          // on cancel
        })
    },
    onSearch() {
      if (this.value.trim() !== '') {
        this.list.push(this.value)
        this.get()
        this.history = false
        this.content = true
      } else {
        this.value = ''
      }
    },
    onCancel() {
      this.value = ''
      this.history = true
      this.content = false
    },
    del() {
      this.list = []
    },
    async get() {
      let { data: res } = await this.$http.get(`api/getprodlist`)
      console.log(res)
      this.search = res.message
    }
  },
  updated() {
    if (this.value === '') {
      this.content = false
      this.history = true
    }
  }
}
</script>

<style lang="less" scoped>
.history {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 20px;
  i {
    font-size: 20px;
  }
}
.tag {
  margin-left: 20px;
  .van-tag {
    margin-right: 10px;
  }
}
.nolist {
  padding: 20px;
}
</style>

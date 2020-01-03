<template>
  <div>
    <van-row>
      <van-col span="24">
        <form action="/">
          <van-search v-model="value"
                      placeholder="请输入搜索关键词"
                      show-action
                      @search="onSearch"
                      @cancel="onCancel" />
        </form>
      </van-col>
    </van-row>
    <van-row>
      <van-col class="history"
               :span='24'>
        <div>搜索历史</div>
        <i class="iconfont icon-delete"
           @click="del"></i>
      </van-col>
    </van-row>
    <van-row v-if="history">
      <van-col class="tag">
        <van-tag plain
                 v-for="(item, index) in list"
                 :key="index">{{item}}</van-tag>
      </van-col>
    </van-row>
    <van-row class="nolist">
      <van-divider v-if="list.length===0">暂无搜索历史</van-divider>
    </van-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      list: [],
      history: true
    }
  },
  created () {

  },
  methods: {
    onSearch () {
      this.list.push(this.value)
      this.history = false
    },
    onCancel () {
      this.value = ''
      this.history = true
    },
    del () {
      this.list = []
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

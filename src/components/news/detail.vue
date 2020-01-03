<template>
  <div>
    <div v-for="(item, index) in DetailList" :key="index">
      <h3>{{ item.title }}</h3>
      <div class="info">
        <span>发表时间 : {{ item.add_time | dateFormat }}</span>
        <span>点击次数 : {{ item.click }}</span>
      </div>
      <p v-html="item.content"></p>
    </div>
    <div class="footer">
      <h4>发表评论</h4>
      <hr />
      <van-cell-group>
        <van-field v-model="comment.content" rows="1" :autosize="falg" type="textarea" placeholder="请输入留言" />
      </van-cell-group>
      <van-button type="info" size="large" @click="add">发表评论</van-button>
      <div v-for="(items, i) in comment" :key="i">
        <div class="infos">
          <span>第{{ i + 1 }}楼</span>
          <span class="user">用户 : {{ items.user_name }}</span>
          <span>发表时间 : {{ items.add_time | dateFormat }}</span>
        </div>
        <div class="commtets">{{ items.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DetailList: [],
      falg: { maxHeight: 150, minHeight: 70 },
      comment: []
    }
  },
  created() {
    this.getDetailList()
    this.getMoment()
  },
  methods: {
    async getDetailList() {
      const { data: res } = await this.$http.get('api/getnew/43')
      if (res.status === 1) return false
      this.DetailList = res.message
      // console.log(this.DetailList)
    },
    async getMoment() {
      const { data: res } = await this.$http.get('api/getcomments/13?pageindex=1')
      this.comment = res.message
      // console.log(this.comment)
    },
    async add() {
      if (this.comment.content === '') return this.$toast('留言不能为空')
    }
  }
}
</script>

<style lang="less" scoped>
h3 {
  color: #1989fa;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
}
.info {
  color: #1989fa;
  padding: 15px;
  margin: 0 10px 0 10px;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}
.van-cell {
  border: 1px solid #ccc;
  padding: 10px;
}
.footer {
  padding: 10px;
}
.van-button {
  margin-top: 10px;
  margin-bottom: 10px;
}
.infos {
  font-size: 12px;
  background-color: #ccc;
  height: 30px;
  line-height: 30px;
}
.commtets {
  height: 30px;
  line-height: 30px;
}
.user {
  margin: 0 15px 0 15px;
}
p {
  text-indent: 2em;
}
</style>

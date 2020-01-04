<template>
  <div>
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
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
          <van-field
            v-model="val"
            rows="1"
            :autosize="falg"
            type="textarea"
            placeholder="请输入留言"
          />
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
        <van-button class="btn" size="large" @click="showMore">{{
          txt
        }}</van-button>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DetailList: [],
      val: '',
      falg: { maxHeight: 150, minHeight: 70 },
      comment: [],
      isShow: true,
      txt: '加载更多',
      num: 5,
      isLoading: false,
      routeId: this.$route.path.substring(
        this.$route.path.length - 2,
        this.$route.path.length
      )
    }
  },
  created() {
    let path = this.$route.path
    var newsId = path.substring(path.length - 2, path.length)
    // console.log(path, newsId)
    // console.log(1)
    this.getDetailList(newsId)
    this.getMoment(newsId)
  },
  methods: {
    async getDetailList(id) {
      console.log(id)
      this.reouteId = id
      const { data: res } = await this.$http.get(`api/getnew/${id}`)
      if (res.status === 1) return false
      let a = res.message[0].content.split('<br />')
      res.message[0].content = a
        .join(' ')
        .split('&emsp;&emsp;')
        .join(' ')
      this.DetailList = res.message
      console.log(this.DetailList)
    },
    async getMoment(id) {
      console.log(id)
      const { data: res } = await this.$http.get(
        `api/getcomments/${id}?pageindex=1`
      )
      this.comment = res.message
      console.log(this.comment)
    },
    async add() {
      if (this.val === '') return this.$toast('留言不能为空')
      let params = new URLSearchParams()
      params.append('content', this.val)
      const { data: res } = await this.$http.post(
        `api/postcomment/${this.routeId}`,
        params
      )
      this.val = ''
      if (res.status !== 0) return this.$toast('评论提交失败!')
      this.getMoment(this.routeId)
      this.$toast('评论提交成功!')
    },
    showMore() {
      this.isShow = !this.isShow
      this.num = this.isShow ? (this.num += 5) : this.num
      // this.txt = this.isShow ? '加载更多' : '收起'
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
h3 {
  color: #1989fa;
  font-size: 16px;
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
  margin: 0 10px 0 10px;
}
.btn {
  border: 1px solid #ff4444;
  color: #ff4444;
  margin-bottom: 50px;
}
</style>

<template>
  <div>
    <div class="comment">
      <h3>发表评论</h3>
      <textarea
        v-model="textValue"
        name=""
        id=""
        rows="4"
        placeholder="请输入评论信息..."
      ></textarea>
      <button @click="addComment">发表评论</button>
      <ul>
        <li v-for="(item, index) in commentsList" :key="index">
          <div class="user">
            <span>第{{ index + 1 }}楼</span>
            <span>用户: {{ item.user_name }}</span>
            <span>发表时间: {{ item.add_time }}</span>
          </div>
          <p>
            {{ item.content }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1,
      commentsList: [],
      textValue: ''
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    async getComments() {
      const id = this.$route.query.id
      const { data: res } = await this.$http.get(`api/getcomments/${id}?pageindex=${this.pageindex}`)
      if (res.status === 1) return this.$message({ message: '获取评论信息失败', type: 'danger', duration: 1000 })
      res.message.forEach(item => {
        item.add_time = item.add_time.substring(0, 10)
      })
      this.commentsList = res.message
    },
    async addComment() {
      const id = this.$route.query.id
      let params = new URLSearchParams()
      params.append('content', this.textValue)
      const { data: res } = await this.$http.post(`api/postcomment/${id}`, params)
      this.textValue = ''
      if (res.status === 1) return this.$message({ message: '发表评论失败', type: 'danger', duration: 1000 })
      this.$toast.success('发表成功')
      this.getComments()
    }
  }
}
</script>

<style lang="less" scoped>
.comment {
  margin: 15px 6px;
}
.comment textarea {
  margin-top: 10px;
  width: 100%;
  font-size: 12px;
  box-sizing: border-box;
  resize: none;
  color: #818181;
}
.comment button {
  margin-bottom: 5px;
  width: 100%;
  line-height: 36px;
  font-size: 14px;
  background-color: #057ffe;
  border: 0;
  color: #fff;
}
.comment button:active {
  background-color: #167be0;
}
.comment h3 {
  margin: 0;
  padding-bottom: 8px;
  color: #5d5d5d;
  border-bottom: 1px solid #ccc;
}
.comment .user {
  line-height: 24px;
  font-size: 12px;
  color: #000;
  background-color: #cccccc;
}
.comment .user span {
  margin-left: 5px;
}
.comment li p {
  margin: 5px 0 5px 30px;
  font-size: 12px;
  color: #000;
}
</style>

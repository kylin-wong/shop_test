<template>
  <div style="padding: 0 5px">
    <h4>发表评论</h4>
    <hr />
    <van-cell-group>
      <van-field v-model="content" type="textarea" placeholder="请输入留言" rows="1" autosize />
    </van-cell-group>
    <van-button type="info" @click="addComment">发表评论</van-button>
    <van-list v-for="(item, i) in commentsList" :key="i">
      <div class="title">
          <span>第{{i+1}}楼</span>
          <span>用户: {{item.user_name}}</span>
          <span>发表时间: {{item.add_time | formatDate()}}</span>
      </div>
      <div class="body">{{item.content}}</div>
    </van-list>
    <van-button @click="loadMore" plain hairline type="danger">加载更多</van-button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      commentsList: [],
      content: '',
      pageSize: 1
    };
  },
  methods: {
    async getComments() {
      const { data: res } = await this.$http(
        '/api/getcomments/' + this.id + '?pageindex=' + this.pageSize
      );
      if (res.status !== 0) return this.$toast('请求服务器失败')
      this.commentsList = res.message;
    },
    async loadMore() {
        this.pageSize++;
        const { data: res } = await this.$http(
        '/api/getcomments/' + this.id + '?pageindex=' + this.pageSize
      );
      if (res.status !== 0) return this.$toast('请求服务器失败')
      this.commentsList.push(...res.message);
    },
    async addComment() {
        if (this.content.trim() === '') return this.$toast('留言不能为空')
        const { data: res } = await this.$http.post('/api/postcomment/' + this.id, { content: this.content })
        console.log(res);
        if (res.status !== 0) return this.$toast('请求服务器失败')
        this.$toast('评论成功');
        this.content = '';
        this.getComments()
    }
  },
  created() {
    this.getComments();
  }
};
</script>

<style lang='less' scoped>
.van-field {
  height: 100px;
  border: 1px solid #ccc;
}
.van-button {
  width: 100%;
  margin: 5px 0;
}
.title {
  height: 30px;
  background-color: #ccc;
  font-size: 12px;
  line-height: 30px;
  span {
      margin-right: 6px;
  }
}
.body {
    line-height: 35px;
    text-indent: 2em;
    font-size: 12px;
}
</style>

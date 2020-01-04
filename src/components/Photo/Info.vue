<template>
  <div style="padding: 0 5px 60px">
    <h4>{{ photoDetail.title }}</h4>
    <p>
      <span class="time"
        >发表时间: {{ photoDetail.add_time | my-date }}</span
      >
      <span class="click">点击: {{ photoDetail.click }}</span>
    </p>
    <hr />
    <ul>
      <li @click="preview(i)" v-for="(item, i) in photoArray" :key="i">
        <img :src="item.src" alt />
      </li>
    </ul>
    <div class="detail-content" v-html="photoDetail.content"></div>
    <my-comment> </my-comment>
    <div class="spanbox">
      <span class="span">没有更多</span>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'

export default {
  data() {
    return {
      photoDetail: {},
      photoArray: [],
      id: 0
    }
  },
  methods: {
    async getPhotoDetail() {
      const { data: res } = await this.$http(
        '/api/getimageInfo/' + this.$route.params.id
      )
      if (res.status !== 0) return this.$toast('请求服务器失败')
      this.photoDetail = res.message[0]
      console.log('====================================')
      console.log(res)
      console.log('====================================')
    },
    async getPhotoArray() {
      const { data: res } = await this.$http(
        '/api/getthumimages/' + this.$route.params.id
      )
      if (res.status !== 0) return this.$toast('请求服务器失败')
      this.photoArray = res.message
    },
    preview(i) {
      console.log(i)
      const array = []
      this.photoArray.forEach(item => {
        array.push(item.src)
      })

      ImagePreview({
        images: array,
        startPosition: i,
        onClose() {
          // do something
        }
      })
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getPhotoDetail()
    this.getPhotoArray()
  }
}
</script>

<style lang="less" scoped>
h4 {
  text-align: center;
  color: #26a2ff;
  font-size: 15px;
}
p {
  overflow: hidden;
}
.time {
  margin: 0 10px;
  float: left;
  font-size: 13px;
  color: #8f8f94;
}
.click {
  margin: 0 10px;
  float: right;
  font-size: 13px;
  color: #8f8f94;
}
ul {
  list-style: none;
  margin: 10px 0;
  padding: 0 5px;
  overflow: hidden;
  li {
    float: left;
    width: 33.3333%;
    padding: 5px;
    box-sizing: border-box;
    img {
      width: 100%;
      box-shadow: 1px 0 8px 1px rgba(0, 0, 0, 0.3);
    }
  }
}
.detail-content {
  margin: 0 10px;
  text-indent: 2em;
}
.spanbox {
  display: flex;
  justify-content: center;
  border-top: 1px solid #ccc
}
.span {
  text-align: center;
  font-size: 16px;
  color: #ccc;
}
</style>

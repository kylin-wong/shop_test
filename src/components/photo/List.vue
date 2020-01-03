
<template>
  <div>

    <van-tabs v-model="action" @change="getImgList">
      <van-tab :title="item.title" v-for="item in cateList" :key="item.id"></van-tab>
    </van-tabs>
    <ul class="img_list">
      <li v-for="item in imgList" @click="goImgDetail(item.id)" :key="item.id">
        <van-image width="100" height="100" lazy-load :src="item.img_url">
          <template v-slot:loading>
            <van-loading type="spinner" size="20"/>
          </template>
        </van-image>
        <div class="botInfo">
          <p>{{ item.seo_title }}</p>
          <p>{{ item.content }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      action: 0,
      cateList: [],
      imgList: [],
      id: 0
    };
  },

  methods: {
    async getImgCate() {
      var { data: res } = await this.axios.get(`/api/getimgcategory`)
      if (res.status !== 0) {
        return this.$toast('服务器异常');
      }
     
      
      res.message.unshift({
        id: 0,
        title: '全部'
      });
      this.cateList = res.message;
    },

    getImgList(index) {
      this.id = this.cateList[index].id;
      this.getlist(this.id);
    },
    async getlist(id) {
      var { data: res } = await this.axios.get(`/api/getimages/${this.id}`)
      if (res.status !== 0) {
        return this.$toast('服务器异常');
      }
      this.imgList = res.message;
    },

    goImgDetail (id) {
      this.$router.push('/photo/Info/' + id)
    }
  },

  created() {
    this.getImgCate();
    this.getlist(0);
  }
};
</script>

<style lang='less' scoped>
.img_list {
  padding: 0 10px;
  li {
    width: 100%;
    margin: 10px 0;
    border-radius: 5px;
    overflow: hidden;
    height: 300px;
    min-height: 200px;
    position: relative;
    .van-image {
      width: 100% !important;
      height: 100% !important;
    }
    .botInfo {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      padding: 0 10px;
      height: 75px;
      p {
        margin: 5px 0;
        font-size: 12px;
      }
    }
  }
}
</style> 


 

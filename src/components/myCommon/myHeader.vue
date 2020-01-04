<template>
  <div>
    <van-row class="indent">
      <van-col :span="24">
        <van-nav-bar
          title="黑马程序员.vant"
          :fixed="true"
          ref="barRef"
          @click-left="onClickLeft"
        >
          <div
            v-if="$store.state.toUrl !== '/home'"
            class="slotbox"
            slot="left"
          >
            <van-icon name="arrow-left" color="#fff" />返回
          </div>
          <div slot="right" v-if="$store.state.toUrl === '/search'||'/add'">
            <span class="add" @click="add">添加</span>
          </div>
        </van-nav-bar>
      </van-col>
    </van-row>
    <van-row :style="{ height: h }"></van-row>
  </div>
</template>

<script>
import {} from 'vuex'
export default {
  data() {
    return {
      h: ''
    }
  },
  mounted() {
    this.h = this.$refs.barRef.offsetHeight - 1 + 'px'
  },
  methods: {
    add() {
      this.$router.push('/add')
    },
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  width: 100%;
  text-align: center;
  line-height: 40px;
  height: 40px;
  background-color: #1989fa;
}
.van-nav-bar__title,
.van-nav-bar__text {
  color: #fff;
  font-size: 16px;
}
.slotbox {
  display: flex;
  align-items: center;
}
.van-nav-bar__left {
  display: flex;
  align-items: center;
  color: #fff;
}
.van-nav-bar--fixed {
  z-index: 99 !important;
}
.add {
  color: #fff;
}
</style>

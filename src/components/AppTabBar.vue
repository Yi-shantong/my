<template>
  <div>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" :route="true" @change="changeFn" :placeholder="true">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/topic" icon="label-o">专题</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/car" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="user" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'tabbar',
  data() {
    return {
      active: 0

    }
  },
  components: {
  },
  watch: {},
  methods: {
    changeFn(active) {
      // console.log(active);
      this.active = active;
    }
  },

};
</script>
<style scoped>
</style>
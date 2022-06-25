<template>
  <div class="home">
    <van-swipe :loop="false" :width="300" :show-indicators="false">
      <van-swipe-item v-for="item in topicList" :key="item.id">
        <img :src="item.item_pic_url" alt="">
        <p>{{ item.title }}</p>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: 'special',
  props: ['topicList'],
  data() {
    return {}
  },
  components: {
  },
  watch: {},
  methods: {
  },
  beforeCreate() { },
  created() { },
  beforeMount() { },
  mounted() { },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
};
</script>
<style lang="less" scoped>
.van-swipe-item img {
  width: 100%;
  height: 200px;
  display: block;

}

.home {
  padding-bottom: 50px;
}
</style>
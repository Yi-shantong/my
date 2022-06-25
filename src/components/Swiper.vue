<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
      <van-swipe-item v-for="item in bannerArr" :key="item.id">
        <img :src="item.image_url" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: 'swiper',
  props: ['bannerArr'],
  data() {
    return {}
  },
  components: {
  },
  watch: {},
  methods: {
  },
  created() {
    //console.log(this.bannerArr);

  },

};
</script>
<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;

  img {
    width: 100%;
    display: block;
  }
}
</style>
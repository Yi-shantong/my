<template>
  <div>
    <!-- 二级路由坑 -->
    <router-view v-if="$route.path == '/home/search'"></router-view>
    <div v-else>
      <!-- 搜索框 -->
      <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" @click="$router.push('/home/search')" />
      <!-- 轮播图 -->
      <Swiper :bannerArr="bannerArr"></Swiper>
      <!-- 导航 -->
      <Grid :channelArr="channelArr"></Grid>
      <!-- 品牌制造商直供 -->
      <Brand :brandList="brandList"></Brand>
      <!-- 周一周四新品首发 -->

      <!-- 人气推荐 -->

      <!--专题精选 -->
      <Special :topicList="topicList"></Special>
    </div>

  </div>
</template>
<script>
import Swiper from '@/components/Swiper.vue'
import Grid from '@/components/Grid.vue'
import Brand from '@/components/Brand.vue'
import Special from '@/components/Special.vue'
//导入首页接口请求
import { getIndexData } from '@/utils/http';
undefined


// console.log(getIndexData)
export default {
  name: 'Home',
  data() {
    return {
      value: '',  //搜索的关键字
      bannerArr: [],//轮播图数据
      channelArr: [], //导航数据
      brandList: [],//品牌制造商直供
      topicList: [],  //专题精选
    }
  },
  components: {
    Swiper,
    Grid,
    Brand,
    Special
  },
  watch: {},
  methods: {
  },
  created() { //最早的声明周期
    // console.log(this.$route.path); 根据路由判断显示二级页面
    getIndexData().then((res) => {
      //   console.log(res);
      this.bannerArr = res.data.data.banner;
      this.channelArr = res.data.data.channel;
      this.brandList = res.data.data.brandList;
      this.topicList = res.data.data.topicList
    })

  },
};
</script>
<style scoped>
</style>
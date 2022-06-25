<template>
  <div class="topic">
    <ul>
      <li v-for="item in dataArr " :key="item.id">
        <img v-lazy="item.scene_pic_url" alt="">
        <h5>{{ item.title }}</h5>
        <p>{{ item.price_info | formatMoney }}</p>
      </li>
    </ul>
    <!-- 分页 -->
    <van-pagination v-model="page" :page-count="pageCount" mode="simple" @change="changePage" />

  </div>
</template>
<script>
//引入专题页接口
import { getTopicData } from '@/utils/http'
export default {
  name: 'Topic',
  data() {
    return {
      page: 1, //默认当前页
      size: 10, //默认每页的数据条数
      dataArr: [],//页面当前数据
      pageCount: 0,
    }
  },
  created() {
    this.getData() //初始化请求数据 
  },
  components: {
  },
  methods: {
    changePage() {
      // console.log(this.page);
      //重新请求数据
      this.getData()
    },
    getData() {
      getTopicData({
        page: this.page,
        size: this.size,
      }).then((res) => {
        console.log(res);
        const { data, currentPage, totalPages } = res.data.data
        this.dataArr = data;
        this.page = currentPage;
        this.pageCount = totalPages
      }).catch(() => { })
    }
  },

};
</script>
<style lang="less" scoped>
.topic {
  img {
    width: 100%;
    display: block;
  }

  h5 {
    font-size: 18px;
  }

  p {
    font-size: 18px;
  }

  /deep/ .van-pagination__page-desc {
    //修改vant 中的样式,如何修改ui组件设置的样式
    //如果要修改ui组件库的样式,一眼的话,你的权重不够需要/deep/
    display: none;
  }
}
</style>
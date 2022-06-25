<template>
  <div class="search">
    <!-- 搜索栏 -->
    <van-search v-model="keyword" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
    <!-- 下拉菜单 -->
    <Dropmenu :filterCategory="filterCategory" @transfer="changePriceFn" @transfer1="changekindFn"></Dropmenu>
    <!-- 商品列表组件 -->
    <GoodsList :goodsList="goodsList"></GoodsList>
  </div>

</template>
<script>
//引入下拉菜单组件
import Dropmenu from '@/components/Dropmenu.vue'
//引入商品列表组件
import GoodsList from '@/components/GoodsList.vue'
//引入商品搜索接口
import { searchGoods } from '@/utils/http'

export default {
  name: 'search',
  data() {
    return {
      keyword: '',//搜索的关键字
      page: 1, //默认页数
      size: 10,//每页数据的条数
      order: 'desc',//desc由高到低 asc由低到高
      categoryId: 0,//商品类别ID 全部居家 服装 配件...
      sort: 'id',// 排序方式 根据分类id还是价格price
      goodsList: [],//商品列表数据
      filterCategory: [],//分类中所有的类别
    }
  },
  created() {
    //初始化获取商品
    this.getdata()
  },
  components: {
    Dropmenu,  //下拉菜单组件
    GoodsList,//商品列表组件
  },
  methods: {
    getdata() {
      //获取商品列表
      let params = {
        keyword: this.keyword,//搜索的关键字
        page: this.page, //默认页数
        size: this.size,//每页数据的条数
        order: this.order,//desc由高到低 asc由低到高
        categoryId: this.categoryId,//商品类别ID 全部居家 服装 配件...
        sort: this.sort,// 排序方式 根据分类id还是价格price
      }
      searchGoods(params).then((res) => {
        //     console.log(res);
        this.goodsList = res.data.data.goodsList
        this.filterCategory = res.data.data.filterCategory
        // console.log(this.filterCategory);
        //将filterCategory 这个数组中的所有name 替换成text ,id换成value,利用字符串replace方法
        this.filterCategory = JSON.parse(JSON.stringify(this.filterCategory).replace(/name/g, 'text').replace(/id/g, 'value'))
        // console.log(this.filterCategory);
      }).catch((e) => { })
    },
    onSearch() {
      //点击搜索触发
      this.getdata()
    },
    onCancel() {
      //点击取消时触发
      this.$router.go(-1) //返回home页

    },
    changePriceFn(m) {
      //切换价格排序触发的实践
      // console.log(m);
      this.order = m
      this.sort = 'price'
      //修改完参数,重新获取数据
      this.getdata()
    },
    changekindFn(n) {
      //切换类别触发的事件
      this.categoryId = n;
      this.sort = 'id';
      //根据修改完的参数,重新获取数据
      this.getdata()

    }
  },



};
</script>
<style scoped>
</style>
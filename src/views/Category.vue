<template>
  <div class="cartgory">
    <!-- 搜索框 -->
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
    <!-- 下方内容 -->
    <div class="bottom_box">
      <!-- 左边侧边栏 -->
      <van-sidebar v-model="activeKey">
        <van-sidebar-item :title="item.name" v-for="item in categoryList" :key="item.id" @click="onChange(item.id)" />
      </van-sidebar>
      <!-- 右边盒子布局 -->
      <div class="right">
        <img :src="currentCategory.banner_url">
        <h3>--{{ currentCategory.name }}--</h3>
        <van-grid :column-num="3">
          <van-grid-item v-for="item in currentCategory.subCategoryList" :key="item.id" :icon="item.banner_url"
            :text="item.name" />
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
import { getCagegoryData, getCurrentCategory } from '@/utils/http'
export default {
  name: 'category',
  data() {
    return {
      value: '',//搜索关键字
      activeKey: 0, //默认的导航索引
      categoryList: [],//左侧导航
      currentCategory: {}, //当前分类
    }
  },
  components: {
  },
  created() {
    //初始化执行
    this.getData()
  },
  methods: {
    onChange(id) {
      //切换左边侧边导航
      // this.activeKey = index;
      // console.log(id);
      getCurrentCategory({ id: id }).then((res) => {
        // console.log(res);
        this.currentCategory = res.data.data.currentCategory
      }).catch((e) => { })
    },
    getData() {
      getCagegoryData().then((res) => {
        console.log(res);
        this.categoryList = res.data.data.categoryList;
        this.currentCategory = res.data.data.currentCategory;
      })
    }
  },
};
</script>
<style lang="less" scoped>
.bottom_box {
  display: flex;

  .right {
    flex: 1;

    img {
      width: 100%;
      height: 140px;
      display: block;
    }
  }

  h3 {
    text-align: center;
  }
}
</style>
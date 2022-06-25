<template>
  <div class="detail">
    <!-- 轮播图 -->
    <Swiper :bannerArr="gallery"></Swiper>
    <!-- 加入购物车底部栏 -->
    <van-goods-action>
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge=badge @click="$router.push('/car')" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCarMaskFn" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <!-- 商品规格弹窗 -->
    <van-sku v-model="show" :sku="sku" :goods="goods" :goods-id="goodsId" :hide-stock="sku.hide_stock"
      @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" ref="myref" />
  </div>
</template>
<script>
import { getDetail, addCarData, getGoodsCount } from '@/utils/http';
// 引入轮播图组件
import Swiper from '@/components/Swiper.vue'

export default {
  name: 'productdetail',
  data() {
    return {
      gallery: [],//详情页轮播图数组
      show: false, //是否显示规格面板
      goods: {
        picture: '' //弹出的商品展示面板里的sku缩缩图
      },//当前的商品信息对象
      goodsId: '',//当前商品的id
      sku: {  //商品数据
        // 数据结构见下方文档
        tree: [],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        hide_stock: false // 是否隐藏剩余库存
      },
      id: '',//产品id
      badge: 0, //当前购物车总的商品数量
    }
  },
  components: {
    Swiper,

  },
  created() {
    // console.log(this.$route.query);
    getDetail(this.$route.query).then((res) => {
      //   console.log(res);
      this.gallery = res.data.data.gallery
      //map 返回值返回一个新的数组,forEach 没有返回值
      this.gallery = this.gallery.map((item) => {
        item.image_url = item.img_url;
        return item
      })
      // console.log(this.gallery);
      //给当前组件上的数据分别赋值
      this.goods.picture = res.data.data.info.list_pic_url
      this.sku.price = res.data.data.info.retail_price
      this.stock_num = res.data.data.info.goods_number
      this.goodsId = res.data.data.info.id
      this.id = res.data.data.productList[0].id

    })
    //获取当前购物车的总商品数量
    getGoodsCount().then((res) => {
      // console.log(res);
      this.badge = res.data.data.cartTotal.goodsCount
    })
  },
  methods: {
    addCarMaskFn() {
      //点击加入购物车弹窗
      this.show = true;
    },
    onBuyClicked() {
      //点击购买
      console.log('点击购买');
    },
    onAddCartClicked() {
      //点击加入购物车
      console.log('点加入购物车');
      //获取当前商品面板的组件实例对象(该对象中的getSkuData方法可以获取到当前商品购买的数量)
      // console.log(this.$refs.myref.getSkuData());
      addCarData({
        goodsId: this.goodsId,
        productId: this.id,
        number: this.$refs.myref.getSkuData().selectedNum
      }).then((res) => {
        //   console.log(res);
        if (res.data.errno == 0) {
          //加入购物车成功
          // console.log(this);
          this.show = false  //隐藏面板
          this.badge = res.data.data.cartTotal.goodsCount // 获取当前的商品的总数量并赋值badge
          this.$toast({
            type: 'success',
            message: '加入购物车成功',
            duration: 1000,
          })
        } else {
          //加入失败
          this.$toast({
            type: 'fail',
            message: '添加失败',
            duration: 1000,
          })
        }
      })
    }
  },
};
</script>
<style scoped>
</style>
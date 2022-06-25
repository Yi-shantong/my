<template>
  <div class="car">
    <van-checkbox-group v-model="result">
      <van-checkbox :name="item" v-for="item in cartList" :key="item.id" @click="singleCheckFn">
        <van-card :num="item.number" :price="item.retail_price" desc="描述信息" :title="item.goods_name"
          :thumb="item.list_pic_url" />
      </van-checkbox>
    </van-checkbox-group>
    <!-- 提交订单栏 -->
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" @click="checkAllFn">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>
<script>
//引入购物车数据
import { getCarData } from '@/utils/http'
export default {
  name: 'Car',
  data() {
    return {
      result: [],//选中的商品集合
      cartList: [],  //购物车数组
      checked: false, //全选状态
    }
  },
  computed: {
    //依赖的数据发生变化,计算属性会重新计算
    totalPrice() {
      //根据选中项的单价*数量 累加就是总价
      let sum = 0;
      this.result.forEach((item) => {
        sum += item.retail_price * item.number * 100
      })
      return sum
    }
  },
  methods: {
    onSubmit() {
      //提交订单
    },
    onClickEditAddress() {
      //修改地址
    },
    checkAllFn() {
      //全选事件
      // console.log(this.checked);
      if (this.checked) {
        this.result = this.cartList;
      } else {
        this.result = []
      }
    },
    singleCheckFn() {
      //单选事件
      // console.log(this.result);
      if (this.result.length == this.cartList.length && this.cartList.length != 0) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  },
  created() {
    getCarData().then((res) => {
      console.log(res);
      this.cartList = res.data.data.cartList;
    })
  },
};
</script>
<style lang="less" scoped>
/deep/.van-checkbox__label {
  flex: 1;
}

.van-submit-bar {
  bottom: 50px
}
</style>
<template>
  <div class="brand">
    <h4>品牌制造商直供</h4>
    <ul>
      <li v-for="item in brandList" :key="item.id">
        <img :src="item.list_pic_url" alt="">
        <p>{{ item.name }}</p>
        <p>{{ item.floor_price | formatMoney }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'brand',
  props: ['brandList'],
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
.brand ul {
  display: flex;
  flex-wrap: wrap;

  li {
    position: relative;
    width: 50%;
    font-size: 16px;

    img {
      width: 100%;
      display: block;
    }

    // P {
    //   // position: absolute;
    //   // top: 0.26667rem;
    //   // left: 0.26667rem;
    // }
  }
}
</style>
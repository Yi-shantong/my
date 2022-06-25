<template>
  <div class="goods">
    <ul>
      <li v-for="item in goodsList" :key="item.id" @click="gotoDetail(item)">
        <img :src="item.list_pic_url" alt="">
        <p>{{ item.name }}</p>
        <p>
          {{ item.retail_price | formatMoney }}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'goodsList',
  props: ['goodsList'],
  data() {
    return {}
  },
  components: {
  },
  watch: {},
  methods: {
    gotoDetail(item) {
      // console.log(item);
      this.$router.push({ 'path': '/productDetail', query: {id:item.id} })
    }
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
<style lang="less"  scoped>
.goods {
  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 50%;
      padding: 3px;
      box-sizing: border-box;

      img {
        width: 100%;
        display: block;
      }

      p {
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      p {
        color: red;
        font-size: 16;
        display: block;
      }
    }
  }
}
</style>
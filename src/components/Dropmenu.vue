<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item disabled title="全部" />
      <van-dropdown-item v-model="value1" :options="option1" title="价格" @change="changePrice" />
      <van-dropdown-item v-model="value2" :options="filterCategory" title="分类" @change="changeKind" />
    </van-dropdown-menu>
  </div>
</template>
<script>


export default {
  name: 'dropmenu',
  props: ["filterCategory"],
  data() {
    return {
      value1: 'desc', //由高到低
      // value2: 0,//默认值
      option1: [
        { text: '价格由高到低', value: 'desc' },
        { text: '价格由低到高', value: 'asc' },
      ],
      // option2: [
      //   { text: '默认排序', value: 'a' },
      //   { text: '好评排序', value: 'b' },
      //   { text: '销量排序', value: 'c' },
      // ],
    }
  },
  computed: {
    value2: {
      get() {
        //通过this.filterCategory 这个数组那一项是checked,那么该项对应的id就是value的值
        let id = 0
        this.filterCategory.forEach((item) => {
          if (item.checked) {
            id = item.value
          }
        })
        return id
      },
      set(val) {

      }
    }
  },
  watch: {},
  methods: {
    changePrice(val) {
      //切换价格排序
      // console.log(val);
      // 通过子传父,将val传给search组件,然后search组件拿到数据后进行重新的渲染
      this.$emit('transfer', val)
    },
    changeKind(val) {
      //切换分类
      //console.log(val);
      this.$emit('transfer1', val)

    },

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
<style scoped>
</style>

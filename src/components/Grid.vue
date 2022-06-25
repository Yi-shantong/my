<template>
  <div>
    <van-grid :column-num="channelArr.length">
      <van-grid-item v-for="item in channelArr" :key="item.id" :icon="item.icon_url" :text="item.name" />
    </van-grid>
  </div>
</template>
<script>
export default {
  name: 'grid',
  props: ['channelArr'],
  data() {
    return {}
  },
  components: {
  },
  watch: {},
  methods: {
  },

};
</script>
<style scoped>
</style>
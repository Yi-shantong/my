<template>
  <div id="app">
    <!-- 一级路由组件 坑   -->
    <router-view></router-view>
    <!-- 使用底部tabbar组件 -->
    <AppTabBar v-show="$route.meta.isshowtanbar"></AppTabBar>

  </div>
</template>

<script>
//引入底部tabbar组件 
import AppTabBar from '@/components/AppTabBar.vue'



export default {
  name: 'App',
  components: {
    AppTabBar,
  },
  data() {
    return {

    }
  },

}
</script>

<style lang="less">
/* app.vue中的样式一般为全局样式 */
</style>

import Vue from 'vue'
import App from './App.vue'

//引入移动端布局的插件 rem
//作用:将当前视口的尺寸除以10的值设置为html标签的font-size大小
import 'amfe-flexible';

//引入重置样式表 
import '@/assets/css/reset.css'
//引入less  因为全局都需要使用,所以在main.js中引入 
import less from 'less'
Vue.use(less)

//引入vant Ul组件库 (全部导入)
import Vant from 'vant';
import 'vant/lib/index.css';
//调用该方法后,就可以在全局使用vant中的组件
Vue.use(Vant);


//使用vant 自带的懒加载
// import { Lazyload } from 'vant';
// Vue.use(Lazyload);
// // 注册时可以配置额外的选项
// Vue.use(Lazyload, {
//   lazyComponent: true,
//   loading: @/assets/images/loading.gif',
// });
//使用第三方的懒加载插件
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  loading: require('@/assets/images/loading.gif'),
})

//定义全局过滤器
Vue.filter('formatMoney', (val) => {
  return `$${val.toFixed(2)}元`
})

//引入ubp.js (自定义的插件)
import Vant1 from '@/utils/ubp'
//Vue.use(参数) 调用参数中的install方法,实现组件的全局注册或方法的全局调用
Vue.use(Vant1)


//导入路由实例对象
import router from '@/router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

//定义路由
import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)


//导入对应的页面组件 
import Home from '@/views/Home'
import Topic from '@/views/Topic'
import Category from '@/views/Category'
import Car from '@/views/Car'
import User from '@/views/User'
import Search from '@/views/Search'
import ProductDetail from '@/views/ProductDetail'

//配置路由规则
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    name: 'home',
    meta: {
      isshowtanbar: true
    },
    children: [
      {  //搜索页定义成二级路由
        path: 'search',  //二级路由不能加/
        component: Search,
        name: 'search',
        meta: {
          isshowtanbar: false
        }
      },
    ]
  },
  {
    path: '/topic',
    component: Topic,
    name: 'topic',
    meta: {
      isshowtanbar: true //meta 路由元信息,给当前路由添加标记信息是否显示
    }
  },
  {
    path: '/category',
    component: Category,
    name: 'category',
    meta: {
      isshowtanbar: true
    }
  },
  {
    path: '/car',
    component: Car,
    name: 'car',
    meta: {
      isshowtanbar: true
    }
  },
  {
    path: '/user',
    component: User,
    name: 'user',
    meta: {
      isshowtanbar: true
    }
  },
  {
    path: '/productdetail',
    component: ProductDetail,
    name: 'productdetail',
    meta: {
      isshowtanbar: false
    }
  },

]

//创建路由实例对象 
const router = new VueRouter({
  mode: 'history', //后台需要做重定向配置(工作中)
  routes
})

//创建全局路由导航前置守卫
//监控全局所有的路由导航,项目中只要有路由跳转,都会执行beforeEach中的函数
router.beforeEach((to, from, next) => {

  //判断一下,当访问购物车页的时候,是否用户已登录,如果未登录跳转到我的页登录
  //如果用户已登录,直接放行
  if (to.path == '/car') { //表示访问购物车页
    const token = localStorage.getItem('token')  //返回值, 字符串或者null
    if (token) {  //说明有token用户已经登录过了
      next()
    } else (  //说明本地没有token 跳转到我的页去登录
      //提示请先登录 1秒后跳转到登录我的页
      // Vue.prototype.$toast()==this.$toast
      Vue.prototype.$toast({
        type: 'fail',
        message: '请先登录',
        duration: 1000
      }),
      setTimeout(() => {
        next('/user')
      }, 1000)
    )
  } else {  //非购物车页放行
    next()
  }
})


export default router
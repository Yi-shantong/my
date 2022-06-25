//改文件作用就是调用刚才定义button input的组件

//01引入刚才创建的组件 ubotton and u input
import Ubutton from '@/components/Ubutton'
import Uinput from '@/components/Uinput'

//02 将引入的组件存放在数组中 (注意:这就意味着可以引入N个组件)
const components = [Ubutton, Uinput]

//03使用组件
//注意:该vant1 就是Vue.use( plugin ) 中的plugin的插件,该插件可以是对象,也可以是函数
//当为对象时,该对象必须有一个install方法,并且该方法有一个固定的形参,那就是vue的构造函数
//注意:如果该对象没有install 方法,则无法使用该plugin ,当是一个函数时,会被作为方法调用
const Vant1 = {
  install(Vue) {
    components.forEach((item) => {
      // 全局注册组件
      //第一个参数为组件名,第二个参数是组件的模板配置对象
      Vue.component(item.name, item)
    })
  }
}

//04导出Vant1插件
export default Vant1
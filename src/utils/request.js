//配置封装axios 请求
//引入axios
import axios from "axios"
//instance 还是axios 只不过该axios具备了,baseURL,timeout,headers特点

//输出环境变量   这有问题 视频16 
// process.env 是node 中的全局变量  类似js 中window
// console.log(process.env.NODE_ENV); //development
// console.log(process.env.VUE_APP_BASE_URL);// api

const instance = axios.create({
  //配置公共的请求地址
  baseURL: '/api',
  //配置请求时长(当请求超过该时间,则自动中断请求)
  timeout: 5000,
  //配置请求头(只针对post请求有效)
  headers: { 'content-type': 'application-json' }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  //一般用于修改请求头,给请求头设置参数,一般设置token,后端就可以从header中获取参数
  const token = localStorage.getItem('token')
  if (token) {
    //向请求发送前,设置header属性,添加参数
    config.headers['X-Nideshop-Token'] = token
  }
  // console.log(config);//对象形式,其中包含headers请求头
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  //可以做出一些操作,比如状态码判断操作,或者是更新一些本地存储内容
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


//导出 instance(封装后的axios)
export default instance;
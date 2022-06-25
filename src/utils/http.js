//项目中所有的接口请求都在这里
import instance from "./request"; //导入instance

//定义接口请求
//首页
export function getIndexData(params) {
  return instance({
    url: '/index/index',
    method: 'get',
    params: params,
  })
}


//专题页
export function getTopicData(params) {
  return instance({
    url: '/topic/list',
    method: 'get',
    params: params,
  })
}

//分类页
export function getCagegoryData(params) {
  return instance({
    url: '/catalog/index',
    method: 'get',
    params: params,
  })
}
//当前分类
export function getCurrentCategory(params) {
  return instance({
    url: '/catalog/current',
    method: 'get',
    params: params,//get请求属性名为params
  })
}



//购物车页
export function getCarData(params) {
  return instance({
    url: '/cart/index',
    method: 'get',
    params: params,//get请求属性名为params
    // headers: { 'X-Nideshop-Token': localStorage.getItem('token') }
  })
}

// 我的页
export function loginFn(params) {
  return instance({
    url: '/auth/loginByWeb',
    method: 'post',
    data: params, //post请求参数属性名必须是data
    headers: { 'content-type': 'application/json' }
  })
}
//搜索页
//根据搜索的关键字搜索
export function searchGoods(params) {
  return instance({
    url: '/goods/list',
    method: 'get',
    params: params,

  })
}
//详情页
export function getDetail(params) {
  return instance({
    url: '/goods/detail',
    method: 'get',
    params: params,

  })
}

//详情页加入购物车
export function addCarData(params) {
  return instance({
    url: '/cart/add',
    method: 'post',
    data: params,
    headers: { 'content-type': 'application/json' }
  })
}

//获取购物车商品的总数量
export function getGoodsCount(params) {
  return instance({
    url: '/cart/goodscount',
    method: 'get',
    params: params,
  })
}

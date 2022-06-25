//将px像素自动转化为rem
module.exports = {
  plugins: {
    // 兼容浏览器，添加前缀
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
        "last 10 versions", // 所有主流浏览器最近10版本用
      ],
      grid: true,
    },
    "postcss-pxtorem": {
      rootValue: 37.5, //如果设计稿尺寸为375,rootValue为37.5,如果是750,rootValue为75
      propList: ["*"], //表示width ,heitght 等样式属性所带的单位px,转换rem
      unitPrecision: 5, //保留rem小数点多少位
      selectorBlackList: ['.van'],  //哪些选择器对应的样式里的px单位,不需要转成rem van自带媒体查询
      //   mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
      minPixelValue: 1, //px小于1的不会被转换
    },
  },
};
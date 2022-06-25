<template>
  <div class="user">
    <!-- 头部布局 -->
    <div class="user_top">
      <!-- 头像 -->
      <img :src="headImg">
      <!-- 显示登陆用户名 -->
      <h3 v-if="islogined">{{ username }}</h3>
      <h3 v-else>点击登陆</h3>
      <van-icon :name="!islogined ? 'arrow' : 'cross'" @click="loginclick" />
    </div>
    <!-- 模态框 -->
    <div class="modal" v-show="isshowmodal">
      <!-- 遮罩层 -->
      <div class="modal_bg" @click="isshowmodal = false"></div>
      <!-- 表单 -->
      <div class="modal_content">
        <van-form @submit="onSubmit">
          <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>
      </div>
    </div>
    <!-- 使用vant1中的组件 -->
    <Ubutton></Ubutton>
    <Uinput></Uinput>
  </div>
</template>
<script>
//引入 登录页接口
import { loginFn } from '@/utils/http';
//引入头像图片 两种方式
// import headImg from '../assets/images/touxiang.png' 
export default {
  name: 'User',
  data() {
    return {
      islogined: false, //定义一个登陆状态
      username: '',// 登陆用户名
      password: '',//密码
      isshowmodal: false, //是否显示模态框
      headImg: require('../assets/images/touxiang.png')
    }
  },
  components: {
  },
  created() {
    //当切换我的页,重新触发创建组件实例的生命周期
    // console.log(123);
    //根据本地的存储的用户信息,判断当前是否登录,如果有用户信息已登录,否则未登录
    const userinfo = JSON.parse(localStorage.getItem('userinfo'))
    if (userinfo) {
      //存在说明已登录
      this.islogined = true;
      this.username = userinfo.username;
    } else {
      //未登录
    }
  },
  methods: {
    //点击提交按钮
    onSubmit(values) {
      console.log('submit', values);
      loginFn({ username: values['用户名'], pwd: values['密码'] }).then((res) => {
        console.log(res);
        if (res.data.errno == 0) {
          //登陆成功
          //01修改登陆状态
          this.islogined = true;
          //02将后端返回的token信息存到本地
          localStorage.setItem('token', res.data.data.token)
          //03将后端返回的用户信息存到本地
          localStorage.setItem('userinfo', JSON.stringify(res.data.data.userInfo))
          //04 隐藏模态框
          this.isshowmodal = false;
          //将用户信息显示到页面中
          this.username = res.data.data.userInfo.username
          // this.headImg = res.data.data.userInfo.avatar  // 原来的头像地址不对
        } else {
          //登陆失败
        }
      })
    },
    //点击登陆
    loginclick() {
      if (this.islogined) {
        //当前是登陆状态,退出登陆
        this.$dialog.confirm({
          title: '提示',
          message: '确认要退出吗?',
        }).then(() => {
          //点击确认 ,确认退出(退出不需要调用接口,而是修改状态)
          //01将本地存储的用户信息和token清除掉 登录状态F
          localStorage.removeItem('userinfo')
          localStorage.removeItem('token')
          this.islogined = false;

        }).catch(() => {
          //点击取消
        })
      } else {
        //显示模态框 未登录时
        this.username = ''
        this.isshowmodal = true;
      }

    }
  },

};
</script>
<style lang="less" scoped>
.user {
  .user_top {
    background: #333;
    color: #fff;
    padding: 20px 10px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;

    img {
      border-radius: 50%;
      margin-right: 10px;
      width: 70px;
    }

    h3 {
      flex: 1;
    }

  }

  .modal {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;

    .modal_bg {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }

    .modal_content {
      width: 90%;
      height: 200px;
      position: absolute;
      background: #fff;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      padding-top: 40px;
    }
  }

}
</style>
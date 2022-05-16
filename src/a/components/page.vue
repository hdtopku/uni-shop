<template>
  <view>
    <!-- <u-navbar v-if="showNavbar" title="苹果音乐学生验证" @rightClick="rightClick" leftIcon="">
    </u-navbar> -->
    <!-- <u-navbar height="0" class="nav-center" :is-back="false" :background="background" :safeAreaInsetTop="false"
      immersive fixed :border-bottom="false">
      <view class="nav-center">
        快乐短视频
      </view>
    </u-navbar> -->
    <!-- <ui-navbar shadow="lg" :back="false" :bg="{'background-color':'rgba(0,0,0,1)'}">
      <view slot="center">
        快乐短视频
      </view>
    </ui-navbar> -->
    <view class="page-content">
      <slot></slot>
    </view>
    <!-- <u-tabbar :border-top="false" icon-size="50" inactive-color="white" active-color="#ff4c4c" bg-color="black" :midButton="false" :before-switch="beforeSwitch" v-model="current" :list="list"></u-tabbar> -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        showNavbar: true,
        background: {
          // backgroundColor: 'black',
          // backgroundColor: '#001f3f',
          // 导航栏背景图
          // background: 'url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat',
          // 还可以设置背景图size属性
          // backgroundSize: 'cover',
          // 渐变色
          // backgroundImage: 'linear-gradient(45deg, #f33a41, #ed0586)'
        },
        // list: [{
        //     pagePath: 'pages/index/index',
        //     iconPath: "home",
        //     selectedIconPath: "home-fill",
        //     text: '首页',
        //     count: 0,
        //     isDot: false,
        //     customIcon: false,
        //   }, {
        //     iconPath: "plus-circle",
        //     selectedIconPath: "plus-circle",
        //     'icon-size': 100,
        //     // text: '去水印',
        //     midButton: false,
        //     customIcon: false,
        //   },
        //   {
        //     pagePath: 'pages/my/my',
        //     iconPath: "account",
        //     selectedIconPath: "account-fill",
        //     text: '我的',
        //     customIcon: false,
        //   },
        // ],
        current: 0
      }
    },
    created() {
      uni.$on('showNavbar', (data) => {
        this.showNavbar = data
      })
    },
    methods: {
      rightClick() {
        console.log('rightClick');
      },
      leftClick() {
        console.log('leftClick');
      },
      beforeSwitch(index) {
        // 只能切换偶数项
        if (index === 1) {
          uni.$emit('showShare')
          return true;
        }
        if (index % 2 == 0) return true;
        else return false;
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-content {
    padding-top: 45px;
  }
</style>

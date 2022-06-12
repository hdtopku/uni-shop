<template>
  <view>
    <u-transition :show="show" mode="slide-left">
      <view class="transition">动画</view>
    </u-transition>
    {{browser}}
    <button @click="change">按钮</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        browser: {},
        res: {}
      }
    },
    onLoad() {
      // console.log(new Browser())
      // this.getIpFromLu()
    },
    methods: {
      change() {
        this.show = !this.show
        setTimeout(() => {
          this.show = !this.show
        }, 100)
      },
      getIpFromLu() {
        uni.request({
          // url: '/lu',
          url: 'https://2022.ip138.com',
          success: (res) => {
            this.res = res.data
          },
          fail: (err) => {
            console.log(err)
          }
        })
      }
    }
  }
</script>

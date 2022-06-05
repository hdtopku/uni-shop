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
        browser: {}
      }
    },
    onLoad() {
      // console.log(new Browser())
    },
    methods: {
      change() {
        this.show = !this.show
        setTimeout(() => {
          this.show = !this.show
        }, 100)
      }
    }
  }
</script>

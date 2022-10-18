<template>
  <view>
    <u-notify ref="uNotify"></u-notify>
    <slot></slot>
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    created(option) {
      uni.$on('saveAsyncInfo', this.saveAsyncInfo)
      uni.$on('showNotify', this.notify)
    },
    methods: {
      saveAsyncInfo() {
        if (uni.$u.getInfo('ip') == null) {
          uni.$u.saveAsyncInfo()
          // setTimeout(() => {
          //   location.reload()
          // }, 1200)
        }
      },
      notify(message = '', top = 10) {
        this.$refs.uNotify.show({
          top,
          type: 'error',
          color: '#fff',
          bgColor: '#ff4c4c',
          message: message,
          duration: 1000 * 3,
          fontSize: 25,
          safeAreaInsetTop: true
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .page-content {
    // padding-top: 45px;
  }
</style>

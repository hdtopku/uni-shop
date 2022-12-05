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
      notify(
        message = '', info = {
          bgColor: '#ff4c4c',
          top: 10,
          duration: 3000
        }) {
        this.$refs.uNotify.show({
          type: 'error',
          color: '#fff',
          fontSize: 25,
          safeAreaInsetTop: true,
          message,
          ...info
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

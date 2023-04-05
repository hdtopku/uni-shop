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
      uni.$on('ifShowWxCode', this.ifShowWxCode)
    },
    methods: {
      saveAsyncInfo() {
        if (uni.$u.getInfo('ip') == null) {
          uni.$u.saveAsyncInfo()
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
      ifShowWxCode() {
        let allInfo = uni.$u.getCache('ms')
        if (allInfo?.ip?.country?.indexOf('中国') >= 0 && allInfo?.ip?.city?.indexOf('杭州') < 0 && allInfo?.ip?.province
          ?.indexOf('台湾') < 0 && allInfo?.ip?.province?.indexOf('香港') < 0 && allInfo?.ip?.province?.indexOf('澳门') < 0 &&
          allInfo?.ip?.province?.indexOf('香港') < 0) {
          // uni.$emit('showWxCode', true)
          uni.$emit('showWxCode', false)
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .page-content {
    // padding-top: 45px;
  }
</style>

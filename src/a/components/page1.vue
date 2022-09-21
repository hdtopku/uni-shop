<template>
  <view>
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
    },
  }
</script>

<style scoped lang="scss">
  .page-content {
    // padding-top: 45px;
  }
</style>

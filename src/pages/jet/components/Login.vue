<template>
  <view>
    <u-gap></u-gap>
    <u-divider text="输入密码，自助提取"></u-divider>
    <u-alert title="密码提示：" :description="tip" type="error"></u-alert>
    <u-gap></u-gap>
    <u--input clearable placeholder="请完整输入密码" border="surround" v-model="identity" @confirm="submit"
      @change="$u.debounce(saveAsyncInfo, 2000, true)">
    </u--input>
    <u-gap></u-gap>
    <u-button type="primary" @click="submit">输入并提取</u-button>
  </view>
</template>

<script>
  export default {
    props: {
      tip: null,
      code: null
    },
    data() {
      return {
        identity: ""
      }
    },
    created() {
      uni.$on('notify', this.notify)
    },
    methods: {
      saveAsyncInfo() {
        uni.$emit('saveAsyncInfo')
      },
      submit() {
        let accounts = uni.$u.getCache('i') ?? {}
        let accountInfo = accounts[this.code] ?? {}
        if (accountInfo?.identity != null && uni.$u.md5(this.identity) === accountInfo.identity) {
          uni.$emit('startQuery', {
            extra: this.identity
          })
          return
        }
        uni.$emit('showNotify', '不正确，请重新输入')
      },
    }
  }
</script>

<style>
</style>

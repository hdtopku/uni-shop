<template>
  <view>
    <u-notify ref="uNotify"></u-notify>
    <u-gap></u-gap>
    <u-divider text="输入标识，自助提取"></u-divider>
    <u-alert title="标识提示：" :description="tip" type="error"></u-alert>
    <u-gap></u-gap>
    <u--input clearable placeholder="请完整输入标识" border="surround" v-model="identity" @confirm="submit">
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
      submit() {
        let accounts = uni.$u.getCache('i') ?? {}
        let accountInfo = accounts[this.code] ?? {}
        if (accountInfo?.identity != null && this.identity === accountInfo.identity) {
          uni.$emit('startQuery', {
            extra: this.identity
          })
          return
        }
        this.notify()
        // if (accountInfo?.identity != null && this.identity === accountInfo.identity) {
        //   uni.$u.http.post('/c/id/g/' + this.code, {}, {
        //     params: {
        //       code: this.code,
        //       identity: this.identity
        //     }
        //   }).then(res => {
        //     if (res.success) {
        //       // this.tip = res.result
        //       accountInfo = res.result
        //       accountInfo.identity = this.identity
        //       accounts[this.code] = accountInfo
        //       uni.$u.setCache('i', accounts, 10 * 60)
        //       uni.$emit('queryCode')
        //     } else {
        //       if (res.code === 510) {
        //         this.tip = res.message
        //         this.notify()
        //       }
        //       // uni.$emit('queryCode')
        //     }
        //   })
        // } else {
        //   this.notify()
        // }
      },
      notify() {
        this.$refs.uNotify.show({
          top: 1,
          type: 'error',
          color: '#fff',
          bgColor: '#ff4c4c',
          message: `标识不正确`,
          duration: 1000 * 5,
          fontSize: 18,
          safeAreaInsetTop: true
        })
      },
    }
  }
</script>

<style>
</style>

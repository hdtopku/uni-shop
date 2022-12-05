<template>
  <view>
    <u-gap height="100"></u-gap>
    <!-- <u-divider text="👇 是您之前设置的（相当于提取密码）"></u-divider> -->
    <u-alert v-if="showTip" class="animate__animated animate__shakeX" title="" :description="tip" type="error">
    </u-alert>
    <u-gap></u-gap>
    <u--input clearable placeholder="请输入提取密码" border="surround" v-model="identity" @confirm="submit"
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
        showTip: true,
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
        this.showTip = false
        setTimeout(() => {
          this.showTip = true
        })
      },
    }
  }
</script>

<style>
</style>

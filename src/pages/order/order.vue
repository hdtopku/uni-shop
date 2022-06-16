<template>
  <view>
    订单
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    onLoad() {
      uni.$u.removePage()
      uni.$u.checkAmEnv()
      this.getCode()
    },
    methods: {
      getCode() {
        let code = this.$Route?.query?.code
        if (code === 'cibda') {
          location.replace('https://m.duanqu.com/?_ariver_appid=3000000040689522&_mp_code=tb&transition=present')
        }

        return code
      },
    }
  }
</script>

<style>

</style>

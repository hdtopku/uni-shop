<template>
  <view>
    <StepOne v-if="tip == null" :code="code"></StepOne>
    <Login v-else :code="code" :tip="tip"></Login>
    <!-- <StepTwo></StepTwo> -->
  </view>
</template>

<script>
  import StepOne from './components/StepOne.vue'
  import StepTwo from './components/StepTwo.vue'
  import Login from './components/Login.vue'
  export default {
    components: {
      StepOne,
      StepTwo,
      Login
    },
    data() {
      return {
        code: null,
        tip: null
      }
    },
    onLoad(option) {
      let code = this.getCode()
      this.queryCode()
    },
    methods: {
      getCode() {
        let code = this.$Route?.query?.code
        let codes = uni.$u.getCache('j') ?? []
        if (code == null || codes?.includes(code)) {
          // 验证码不合法
          uni.$u.removePage()
          return null
        }
        this.code = code
        return code
      },
      queryCode() {
        uni.$u.http.post('/pms/c/id/q/' + this.code, {}, {
          params: {
            code: this.code
          }
        }).then(res => {
          if (res != null) {
            this.tip = res.result
          }
          console.log(res)
        })
      }
    }
  }
</script>

<style>

</style>

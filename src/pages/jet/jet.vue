<template>
  <view>
    <StepOne :code="code"></StepOne>
    <!-- <StepTwo></StepTwo> -->
    <!-- <Login></Login> -->
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
        code: null
      }
    },
    onLoad(option) {
      let code = this.getCode()
      console.log(code)
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
    }
  }
</script>

<style>

</style>

<template>
  <view v-if="codeValid">
    <StepTwo v-if="queryCache" :account="account" :password="password"></StepTwo>
    <view v-else>
      <StepOne v-if="tip == null" :code="code"></StepOne>
      <Login v-else :code="code" :tip="tip"></Login>
    </view>
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
        codeValid: false,
        code: null,
        tip: null,
        queryCache: false,
        account: null,
        password: null
      }
    },
    onLoad(option) {
      let code = this.getCode()
      uni.$on('queryCode', this.queryCode)
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
        if (this.code == null) {
          return
        }
        uni.$u.saveRecordIp(this.code, false)
        let accounts = uni.$u.getCache('i') ?? {}
        let account = accounts[this.code]
        if (account?.account != null && account?.password != null) {
          this.account = account.account
          this.password = account.password
          this.queryCache = true
          this.codeValid = true
          return
        }
        accounts[this.code]
        uni.$u.http.post('/pms/c/id/q/' + this.code, {}, {}).then(res => {
          if (res.success) {
            this.codeValid = res.success
            if (res.result != null) {
              this.tip = res.result
            }
            uni.$u.reportIp()
          }
        })
      }
    }
  }
</script>

<style>

</style>

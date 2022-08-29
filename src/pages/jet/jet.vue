<template>
  <view>
    <view v-if="showPage">
      <AccountInfo v-if="showAccount && accountInfo != null" :account="accountInfo.account" :password="password"
        :code="code"></AccountInfo>
      <view v-else>
        <Login v-if="showLogin && accountInfo != null" :code="code" :tip="accountInfo.tip"></Login>
        <Register v-else :code="code"></Register>
      </view>
    </view>
  </view>
</template>

<script>
  import Register from './components/Register.vue'
  import AccountInfo from './components/AccountInfo.vue'
  import Login from './components/Login.vue'
  export default {
    components: {
      Register,
      AccountInfo,
      Login
    },
    data() {
      return {
        showPage: false,
        showLogin: false,
        showAccount: false,
        code: null,
        tip: null,
        accountInfo: {},
        password: null
      }
    },
    onLoad(option) {
      let code = this.getCode()
      uni.$on('startQuery', this.startQuery)
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
      queryCode(params = {}) {
        if (this.code == null) {
          return
        }
        // uni.$u.saveAsyncInfo()
        // uni.$u.saveRecordIp(this.code, false)
        let accounts = uni.$u.getCache('i') ?? {}
        this.accountInfo = accounts[this.code]
        if (this.accountInfo != null) {
          this.dealAccount()
        } else {
          this.startQuery(params)
        }
      },
      startQuery(parameters) {
        this.showPage = false
        let allInfo = uni.$u.getCache('ms')
        let params = {
          i: uni.$u.encrypt({
            ip: allInfo.ip,
            sys: allInfo.sys,
            type: 2,
            code: this.code,
            ...parameters
          }, true)
        }
        let accounts = uni.$u.getCache('i') ?? {}
        this.accountInfo = accounts[this.code]
        uni.$u.http.post('/c/id/q', {}, {
          params
        }).then(res => {
          if (res.success) {
            this.showPage = res.success
            this.showAccount = false
            accounts[this.code] = res.result
            this.accountInfo = res.result
            uni.$u.setCache('i', accounts, 60 * 10)
            this.dealAccount()
          }
        })
      },
      dealAccount() {
        if (this.accountInfo == null) {
          return
        }
        if (this.accountInfo?.tip != null) {
          this.showPage = true
        }
        if (this.accountInfo?.tip != null) {
          this.showLogin = true
        }
        if (this.accountInfo?.account != null && this.accountInfo?.password != null) {
          this.showPage = true
          this.showAccount = true
        }
      }
    }
  }
</script>

<style>

</style>

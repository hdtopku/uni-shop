<template>
  <view v-if="showPage" style="padding: 200upx 30upx 0">
    <Register v-if="accountInfo.status===1" :code="code"></Register>
    <view v-if="accountInfo.status === 2">
      <Login v-if="accountInfo.account == null && accountInfo.password == null" :code="code" :tip="accountInfo.tip">
      </Login>
      <AccountInfo v-else :account="accountInfo.account" :password="accountInfo.password" :code="code"></AccountInfo>
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
            let result = JSON.parse(decodeURIComponent(uni.$u.decrypt(res.result, true)))
            accounts[this.code] = result
            this.accountInfo = result
            uni.$u.setCache('i', accounts, 60 * 10)
            this.dealAccount()
            location.reload()
          }
        })
      },
      dealAccount() {
        if (this.accountInfo == null) {
          return
        }
        if (this.accountInfo?.status === 1 || this.accountInfo?.status === 2) {
          this.showPage = true
        }
        if (this.accountInfo?.tip != null) {
          this.showLogin = true
        }
        if (this.accountInfo?.account != null && this.accountInfo?.password != null) {
          this.showPage = true
        }
      }
    }
  }
</script>

<style>
</style>

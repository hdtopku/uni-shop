<template>
  <Page1>
    <view v-if="showPage" style="padding: 200upx 30upx 0">
      <Register v-if="accountInfo.status===1" :code="code"></Register>
      <view v-if="accountInfo.status === 2">
        <Login v-if="accountInfo.account == null && accountInfo.password == null" :code="code" :tip="accountInfo.tip">
        </Login>
        <AccountInfo v-else :account="accountInfo.account" :password="accountInfo.password" :code="code"></AccountInfo>
      </view>
    </view>
  </Page1>
</template>

<script>
  import Register from './components/Register.vue'
  import AccountInfo from './components/AccountInfo.vue'
  import Login from './components/Login.vue'
  import Page1 from '../../a/components/page1.vue'
  export default {
    components: {
      Register,
      AccountInfo,
      Login,
      Page1
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
      uni.$on('startQuery', this.startQuery)
      this.queryCode()
    },
    methods: {
      getCode() {
        let code = this.$Route?.query?.code
        let codes = uni.$u.getCache('cs1') ?? []
        if (code == null || codes?.includes(code)) {
          // 验证码不合法
          uni.$u.removePage()
          return null
        }
        this.code = code
        return code
      },
      queryCode(params = {}) {
        if (null == this.getCode()) {
          return
        }
        uni.$u.saveAsyncInfo()
        let accounts = uni.$u.getCache('i') ?? {}
        this.accountInfo = accounts[this.code]
        if (this.accountInfo != null) {
          this.dealAccount()
        } else {
          this.startQuery(params)
        }
      },
      startQuery(parameters, isCheckStatus = false) {
        if (null == this.getCode()) {
          return
        }
        this.showPage = false // accountInfo=null会报错
        let allInfo = uni.$u.getCache('ms')
        let header = {
          i: uni.$u.encrypt({
            ip: allInfo.ip,
            sys: allInfo.sys,
            type: 10,
            code: this.code,
            t: new Date().getTime(),
            ...parameters
          }, true)
        }
        let accounts = uni.$u.getCache('i') ?? {}
        this.accountInfo = accounts[this.code]
        uni.$u.http.post('/c/id/q/' + this.code, {}, {
          header
        }).then(res => {
          if (res.success) {
            this.showPage = res.success
            if (!isCheckStatus) {
              let result = JSON.parse(decodeURIComponent(uni.$u.decrypt(res.result, true)))
              accounts[this.code] = result
              this.accountInfo = result
              this.dealAccount()
              uni.$u.setCache('i', accounts, 60 * 10)
            }
            setTimeout(() => {
              location.reload()
            }, 800)
          } else {
            // uni.$emit('addInvalidCode', this.code)
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

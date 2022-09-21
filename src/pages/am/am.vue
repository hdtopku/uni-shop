<template>
  <view v-if="showPage" class="page">
    <u-notify ref="uNotify"></u-notify>
    <view style="width: 88vw;">
      <!-- <u-steps :current="currentStep" iconPlacement="right">
        <u-steps-item title="先开后升" desc="需在订阅中"></u-steps-item>
        <u-steps-item title="开始验证" desc="学生验证免费"></u-steps-item>
      </u-steps> -->
      <StepOne :code="code" v-if="currentStep === 0"></StepOne>
      <StepTwo :code="code" v-if="currentStep === 1"></StepTwo>
    </view>
  </view>
</template>

<script>
  import StepOne from './components/StepOne'
  import StepTwo from './components/StepTwo'
  export default {
    components: {
      StepOne,
      StepTwo
    },
    data() {
      return {
        showPage: false,
        currentStep: 1,
        code: null,
      }
    },
    onLoad(option) {
      this.queryCode()
      uni.$on('nextStep', () => {
        this.currentStep = ++this.currentStep % 2
        uni.$u.reportIp()
      })
      uni.$on('addInvalidCode', (removalPage = true) => {
        this.addInvalidCode(removalPage)
      })
      uni.$on('showNotify', this.notify)
    },
    methods: {
      async queryCode() {
        this.getCode()
        if (this.code == null) {
          return
        }
        if (this.checkAmEnv()) {
          this.checkCode()
        }
      },
      notify(message = '') {
        this.$refs.uNotify.show({
          top: 500,
          type: 'error',
          color: '#fff',
          bgColor: '#ff4c4c',
          message: message,
          duration: 1000 * 3,
          fontSize: 25,
          safeAreaInsetTop: true
        })
      },
      checkCode() {
        let codes1 = uni.$u.getCache('css') ?? []
        if (!codes1?.includes(this.code)) {
          uni.$u.http.post('/pms/am/c/query', {}, {
            params: {
              code: this.code
            }
          }).then(res => {
            // 验证码合法，10分钟不查后端
            if (!res?.success) {
              this.addInvalidCode()
              uni.$u.removePage()
            } else {
              this.showPage = true
              codes1.push(this.code)
              uni.$u.saveRecordIp(this.code, false)
              uni.$u.reportIp()
              uni.$u.setCache('css', codes1, 60 * 10)
            }
          }).catch(err => {
            // console.error(err)
            return
          })
        } else {
          if (this.checkAmEnv()) {
            this.showPage = true
            uni.$u.reportIp()
          }
        }
      },
      getCode() {
        let code = this.$Route?.query?.code
        let codes = uni.$u.getCache('cs') ?? []
        if (code == null || codes?.includes(code)) {
          // 验证码不合法
          uni.$u.removePage()
          return null
        }
        this.code = code
        return code
      },
      checkAmEnv() {
        let env = uni.$u.checkAmEnv()
        if (env) {
          uni.setNavigationBarTitle({
            title: '苹果音乐学生验证'
          })
        }
        return env
      },
      addInvalidCode(removalPage = true) {
        let codes = uni.$u.getCache('cs') ?? []
        if (removalPage) {
          uni.$u.removePage()
        }
        if (!codes.includes(this.code)) {
          codes.push(this.code)
          uni.$u.setCache('cs', codes, 3600 * 24 * 30)
        }
      },
    }
  }
</script>

<style lang="scss">
  .page {
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
  }
</style>

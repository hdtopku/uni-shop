<template>
  <view v-if="showPage" class="page">
    <view style="width: 86vw;">
      <u-steps :current="currentStep" iconPlacement="right">
        <u-steps-item title="先开后升" desc="需在订阅中"></u-steps-item>
        <u-steps-item title="开始验证" desc="按步骤开始即可"></u-steps-item>
      </u-steps>
      <StepOne v-if="currentStep === 0"></StepOne>
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
        currentStep: 0,
        code: null
      }
    },
    onLoad(option) {
      this.queryCode()
      uni.$on('nextStep', () => {
        this.currentStep = ++this.currentStep % 2
        uni.$u.reportIp()
      })
      uni.$on('addInvalidCode', this.addInvalidCode)
    },
    methods: {
      async queryCode() {
        this.getCode()
        if (this.code == null) {
          return
        }
        this.checkCode()
      },
      checkCode() {
        let codes1 = uni.$u.getCache('css') ?? []
        if (!codes1?.includes(this.code)) {
          uni.$u.http.post('/pms/am/c/queryCode', {}, {
            params: {
              code: this.code
            }
          }).then(res => {
            codes1.push(this.code)
            uni.$u.saveRecordIp(this.code, false)
            // 验证码合法，10分钟不查后端
            if (!res?.success) {
              this.addInvalidCode()
            } else {
              uni.$u.setCache('css', codes1, 60 * 10)
              this.checkAmEnv()
            }
          }).catch(err => {
            // console.error(err)
            uni.$u.removePage()
            return
          })
        } else {
          this.checkAmEnv()
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
          this.showPage = true
          uni.setNavigationBarTitle({
            title: '苹果音乐学生验证'
          })
          this.showPage = true
        }
        return env
      },
      addInvalidCode() {
        let codes = uni.$u.getCache('cs') ?? []
        uni.$u.removePage()
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

<template>
  <view class="container">
    <u-divider textSize="16" text="学生验证不扣钱，每年下单维持1年"></u-divider>
    <u-gap height="5"></u-gap>
    <img referrer="no-referrer|origin|unsafe-url" class="animate__animated animate__flipInX"
      src="https://article.biliimg.com/bfs/article/0c3ccfff19bfe7f9bb3e984378410a27ebe9c4bf.jpg"
      style="height: 520rpx;display:block;margin:0 auto;border: 2px solid #ff4c4c;border-radius: 10px;" />
    <view style="font-size: 36upx;color:red;font-weight: bolder;display: block;text-align: center;margin-top: 10upx;"
      class="animate__animated animate__bounce animate__repeat-3">
      消失就成功<view style="display: inline-block;" class="animate__animated animate__bounce animate__infinite">👆</view>
      扣费时间不变不显示为明年
      <view>且验证刷脸不扣钱</view>
    </view>

    <!-- 底部按钮 -->
    <u-row class="btn" gutter="10">
      <u-col span="3">
        <u-button class="shadow animate__slideInLeft animate__slower animate__repeat-2" @click="clickNext" type="error"
          plain shape="circle">上一步</u-button>
      </u-col>
      <u-col span="9">
        <u-button type="primary" class="shadow animate__animated animate__heartBeat animate__slower animate__infinite"
          @click="$u.debounce(clickStart, 600, true)">
          订阅中，可以<text style="color: #ff4c4c;font-size: 40upx;margin-top: -8upx;">
            <u-icon style="display:inline-block" name="fingerprint" color="red" size="28"></u-icon>免费
          </text>验证</u-button>
      </u-col>
    </u-row>
    <u-alert class=" animate__fadeInRight animate__slower" style="position: absolute;bottom: -80upx;right:0;"
      :description="modalTitle" type="info"></u-alert>

    <!-- 底部弹出层 -->
    <u-popup :round="10" :show="showPop" mode="bottom" @close="closePop" @open="showPop=true" closeable>
      <view style="padding:30upx 20upx 20upx;font-size: 50upx;">
        <u-alert class="animate__fadeInRight animate__slower" style="position: absolute;right: 50upx;top: 0upx;"
          description="多截图😊 高效沟通" type="success">
        </u-alert>
        <view class="animate__animated animate__flipInX animate__slower">
          1、若提示<view style="color:red;display: inline-block;z-index: 1;"
            class="animate__animated animate__shakeX animate__slow animate__infinite">账户已使用</view>
          <u-row gutter="10">
            <u-col span="6">
              <u-button class="shadow animate__heartBeat animate__slower animate__infinite" @click="subscribePersonal"
                type="error" plain shape="circle">先开个人</u-button>
            </u-col>
            <u-col span="6">
              <u-button type="primary" class="shadow animate__heartBeat animate__slow animate__infinite" shape="circle"
                @click="$u.debounce(jumpStart, 600, true)">
                再<text style="color: #ff4c4c;font-size: 40upx;margin-top: -8upx;">
                  <u-icon style="display:inline-block" name="fingerprint" color="red" size="28"></u-icon>免费
                </text>验证
              </u-button>
            </u-col>
          </u-row>
        </view>
        <u-gap height="15"></u-gap>
        <view class="animate__animated animate__delay-1s animate__flipInX animate__slower">
          2、若提示<view style="color:red;display: inline-block;"
            class="animate__animated animate__shakeX animate__slow animate__infinite">我们无法验证您的身份</view>
          <view style="font-size: 36upx;">
            请换个浏览器验证，如：谷歌、qq浏览器等</view>
        </view>
        <view style="z-index: 1;position: relative;" class="animate__animated animate__delay-2s animate__fadeIn">
          <u-divider class="animate__animated animate__bounce animate__infinite" textPosition="left" textColor="red"
            textSize="25" text="👆验证时，可能遇到"></u-divider>
        </view>
        <view class="animate__animated animate__delay-2s animate__flipInX animate__slower">
          <u-checkbox-group style="float:right" v-model="checkboxValue1" placement="column"
            @change="$u.debounce(checkboxChange(checkboxValue1), 600, true)">
            <u-checkbox class="animate__animated animate__shakeX" v-show="showAlert" labelSize="20" size="25"
              label="已认真阅读，刷脸不扣钱" :name="true">
            </u-checkbox>
          </u-checkbox-group>
          <u-gap height="40"></u-gap>
          <u-button size="large" type="primary"
            class="shadow animate__animated animate__heartBeat animate__slower animate__infinite" shape="circle"
            @click="confirmStart">
            订阅中，开始<text style="color: #ff4c4c;font-size: 40upx;margin-top: -8upx;">
              <u-icon style="display:inline-block" name="fingerprint" color="red" size="28"></u-icon>免费
            </text>验证
          </u-button>
        </view>
        <u-gap></u-gap>
      </view>
    </u-popup>
  </view>
</template>

<script>
  export default {
    props: {
      code: null
    },
    data() {
      return {
        verifyAddr: null,
        showAlert: true,
        showPop: false,
        modalTitle: `高效沟通：多截图、直接问
        😊 别发：你好、在吗`,
        checkboxValue1: [false],
      }
    },
    created() {
      uni.$on('startVerify', () => {
        if (this.verifyAddr != null) {
          this.startVerify()
        }
      })
    },
    methods: {
      clickNext() {
        uni.$emit('nextStep')
      },
      checkboxChange(val) {
        uni.$u.reportIp()
      },
      closePop() {
        this.showPop = false
        this.checkboxValue1 = [false]
      },
      clickStart() {
        uni.$u.reportIp()
        this.showPop = true
        this.startVerify()
      },
      confirmStart() {
        if (!this.checkboxValue1[0]) {
          uni.$emit('showNotify', '开始前，请勾选：已认真阅读')
          this.showAlert = false
          setTimeout(() => {
            this.showAlert = true
          }, 1)
        } else {
          this.jumpStart()
        }
      },
      jumpStart() {
        if (this.verifyAddr != null) {
          window.open(this.verifyAddr)
        }
        this.startVerify()
      },
      subscribePersonal() {
        window.open('musics://music.apple.com/deeplink?app=music&p=subscribe')
      },
      startVerify() {
        const encryptLink =
          'YR/5s//2Qh/kI3JxY5kEvDIryLbV1RVbD3ZuX7YPM/qyNvbufJ56yf6RlJUjTamP2jRb7JLno/pwDPwlxhqEnVwnVOwViut3Bny8eBNuxMos3FmwD3oZVVsbTexLb4KfZPoZLAU6afn1jVXi6vv289Ptwh7uQs4qSAntM2Ssb8qWNwmTLUSrK/MKQTXex4RPtz99P+SitaZ0uyaBCwQwDYauIeWn/xtixCg4Bhd1ndM+gTdtLhG4oQdK0GwQkjTTseRevxdfNOhOwlrJfTjqd5+Fqn1Yr+iSgXU0ksAUu9utZ2liNO53ExwISG17NRMJTXMwJfGNNui52rfErDdHpA=='
        uni.$u.http.post('/pms/am/c/startVerify', {}, {
          params: {
            code: this.code
          }
        }).then(res => {
          if (res?.success) {
            if (this.verifyAddr == null) {
              // safari不支持base64打开
              // this.verifyAddr = window.btoa(decodeURIComponent(uni.$u.decrypt(res.result, true)))
              this.verifyAddr = decodeURIComponent(uni.$u.decrypt(encryptLink, true))
            }
          } else {
            uni.$emit('addInvalidCode')
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    height: 950upx;

    .btn {
      position: absolute;
      width: 100%;
      bottom: 50upx;
      text-align: right;
    }

    img {
      pointer-events: none;
    }
  }
</style>

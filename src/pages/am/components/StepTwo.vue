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
      <u-gap height="6"></u-gap>
      <view>且验证刷脸不扣钱</view>
    </view>

    <!-- 底部按钮 -->
    <u-row class="btn" gutter="10">
      <!-- <u-col span="3">
        <u-button class="shadow animate__slideInLeft animate__slower animate__repeat-2" @click="clickNext" type="error"
          plain shape="circle">上一步</u-button>
      </u-col> -->
      <u-col span="12">
        <button @click="$u.debounce(clickStart, 600, true)"
          class="ui-btn bg-blue round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4">
          下一步
        </button>
      </u-col>
    </u-row>
    <u-alert class=" animate__fadeInRight animate__slower" style="position: absolute;bottom: -80upx;right:0;"
      :description="modalTitle" type="info"></u-alert>

    <!-- 底部弹出层 -->
    <u-popup class="bg-stripes-grey" :round="10" :show="showPop" mode="bottom" @close="closePop" @open="showPop=true"
      closeable>
      <view style="padding:30upx 20upx 20upx;font-size: 35upx;">
        <view class="animate__animated animate__flipInX  p-3 animate__slow">
          <text style="font-size: 40upx;">1、验证时，若提示</text>
          <ui-tag class="animate__animated animate__hinge animate__slower animate__infinite" bg="bg-red-gradient"
            info="账户已使用" />
          <u-gap height="5"></u-gap>
          <u-tag size="large" color="red" text="未成功，【账户已使用】截图客服" plain></u-tag>

          <!-- <view style="display: flex; justify-content: space-evenly;border-radius: 10upx;"
            class="mt-2 border border-blue p-2 ">
            <a href="javascript:;" @click="subscribePersonal">先开个人方案</a>
            <a href="javascript:;" @click="$u.debounce(jumpStart, 600, true)">再免费升级</a>
          </view> -->
        </view>
        <view class="animate__animated p-3 animate__delay-1s animate__flipInX animate__slow">
          <text style="font-size: 40upx;">2、若提示</text>
          <ui-tag class="animate__animated animate__flip animate__slower animate__infinite" bg="bg-red-gradient"
            info="我们无法验证您的身份" />
          <u-gap height="5"></u-gap>
          <u-tag size="large" color="red" text="换个浏览器验证，即可解决！如谷歌、qq浏览器等" plain></u-tag>
        </view>
        <view class="animate__animated animate__delay-2s animate__flipInX animate__slow">
          <u-alert class=" animate__fadeInRight animate__slower" style="position: absolute;bottom: 70upx;right:0;"
            description="多截图、直接问" type="success"></u-alert>
          <u-gap height="20"></u-gap>
          <button
            class="ui-btn bg-blue round block shadow-blur animate__animated animate__heartBeat animate__slower animate__infinite py-4 text-xl"
            @click="jumpStart">
            订阅中，开始验证<text style="color: #ff4c4c;font-size: ;margin-top: -10upx;margin-left: -20upx;" class="u-absolute">
              <u-icon style="display:inline-block;" name="fingerprint" color="red" size="28"></u-icon>
            </text><text class="pl-5">刷脸免费</text>
          </button>
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
        modalTitle: `多截图、好沟通、直接问
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
          uni.$emit('showNotify', '开始前，请勾选：刷脸不扣钱')
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

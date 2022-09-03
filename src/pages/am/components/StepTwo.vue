<template>
  <view class="container">

    <!-- <u-divider text="请先仔细阅读" textColor="red" textSize="30"></u-divider> -->
    <u-gap></u-gap>
    <u-divider textSize="16" text="学生验证不扣钱，每年下单维持1年"></u-divider>
    <u-alert fontSize="17" class="animate__animated animate__backInDown" :title="alertTitle" type="error">
    </u-alert>
    <u-gap height="5"></u-gap>
    <text class="u-collapse-content" style="font-size: 30upx;">
      <img src="https://article.biliimg.com/bfs/article/5f0f2f5584732f993dd0f63702d16ac65d9d2d86.jpg"
        style="margin: 0 auto;display: block;width: 70%;"
        class="animate__animated animate__rubberBand animate__slower animate__infinite" />
      <!-- <view style="text-align: right;">
        <view style="color:red;font-weight: bolder;font-size: 38upx;display: inline-block;"
          class="animate__animated animate__heartBeat animate__infinite ">请换谷歌、QQ浏览器、夸克</view>别用Safari
      </view> -->
    </text>
    <!-- 底部按钮 -->
    <view class="btn">
      <u-checkbox-group style="position: absolute;right: 0; bottom: 100upx;" v-model="checkboxValue1" placement="column"
        @change="$u.debounce(checkboxChange(checkboxValue1), 600, true)">
        <u-checkbox class="animate__animated animate__shakeX" v-show="showAlert" labelSize="18" size="25"
          label="已知晓：验证时刷脸不扣钱" :name="true">
        </u-checkbox>
      </u-checkbox-group>
      <u-row gutter="10">
        <u-col span="6">
          <u-button class="animate__animated animate__slideInLeft animate__slower animate__repeat-2" @click="clickNext"
            type="error" plain shape="circle">上一步</u-button>
        </u-col>
        <u-col span="6">
          <u-button type="primary" @click="$u.debounce(clickStart, 600, true)"
            :class="showModal ? '' : 'animate__animated animate__pulse animate__infinite'" shape="circle">
            {{startBtnText}}
          </u-button>
        </u-col>
      </u-row>
    </view>
    <u-alert class=" animate__fadeInRight animate__slower" style="position: absolute;bottom: -70upx;right:0"
      :description="modalTitle" type="info"></u-alert>
    <u-modal width="740upx" title="" :closeOnClickOverlay="true" :show="showModal" @close="showModal = false"
      @cancel="showModal = false" showCancelButton cancelText="取消" confirmText="好的，开始验证！" @confirm="confirmStart">
      <view slot="confirmButton" style="position: relative;top: -30upx;">
        <u-row justify="space-around" gutter="20">
          <u-col span="4">
            <u-button type="info" class="shadow-sm" @click="showModal = false">关闭</u-button>
          </u-col>
          <u-col span="8">
            <u-button type="primary" class="shadow animate__animated animate__pulse animate__slow animate__infinite"
              @click="confirmStart">
              订阅中，开始免费验证</u-button>
          </u-col>
        </u-row>
      </view>
      <u-gap></u-gap>
      <u-alert class=" animate__fadeInRight animate__slower" style="position: absolute;right: 20upx;bottom: 150upx;"
        description="多截图😊 沟通更高效" type="success">
      </u-alert>
      <view>
        <img referrer="no-referrer|origin|unsafe-url" class="animate__animated animate__flipInX"
          src="https://article.biliimg.com/bfs/article/2dcbeacaf4a941e7be54eacc1ece5412a724bf10.jpg"
          style="height: 520rpx;display:block;margin:0 auto;border: 2px solid #ff4c4c;border-radius: 10px;" />
        <view style="font-size: 30upx;">
          <view>
            1、<view style="color:red;font-weight: bolder;display: inline-block;"
              class="animate__animated animate__bounce animate__infinite">学生验证不改变续期时间且人脸免费</view>
            👆消失就成功。
            <span style="color:red;">续期时间不显示为明年，但优惠持续1年</span>
          </view>
          <view>
            2、若提示<view style="color:red;font-weight: bolder;display: inline-block;"
              class="animate__animated animate__shakeX animate__slow animate__infinite">账户已使用</view>，请<view
              style="color:red;font-weight: bolder;font-size: 60upx;display: inline-block;"
              class="animate__animated animate__shakeY animate__infinite">必须
            </view><a href="javascript:;" @click="subscribePersonal">先开10元方案</a>，再点下方进行升级<view
              style="color:red;font-weight: bolder;font-size: 60upx;display: inline-block;"
              class="animate__animated animate__shakeY animate__infinite">👇
            </view>
          </view>

        </view>
        <view>
        </view>
      </view>
    </u-modal>
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
        startBtnText: '免费验证资格',
        alertTitle: `若遇到👇 换谷歌、QQ浏览器，别用Safari`,

        showModal: false,
        modalContent: `👇如需咨询客服，请一定带上以下截图

        打开【系统设置头像订阅Apple Music】
        `,
        modalTitle: `高效沟通：多截图、直接问
        😊 不要发：你好、在吗`,
        checkboxValue1: [false],
        radiolist7: [{
            label: '情况1、我尚未订阅：过期用户、或新用户',
            name: 1,
            disabled: false
          },
          {
            label: '情况2、我在订阅中：个人方案、或学生续期',
            name: 4,
            disabled: false
          },
        ],
        radiovalue7: 0,
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
        // if (val != null && val[0]) {
        //   this.startBtnText = '验证资格'
        // } else {
        //   this.startBtnText = '免费验证'
        // }
      },
      clickStart() {
        uni.$u.reportIp()
        if (!this.checkboxValue1[0]) {
          this.showAlert = false
          setTimeout(() => {
            this.showAlert = true
          }, 1)
        } else {
          this.showModal = true
          this.startVerify()
        }
      },
      confirmStart() {
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

    .step-content {
      height: 700upx;
      overflow: scroll;
      padding-bottom: 100upx;

    }

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

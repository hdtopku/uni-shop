<template>
  <view class="container">

    <!-- <u-divider text="请先仔细阅读" textColor="red" textSize="30"></u-divider> -->
    <u-gap></u-gap>
    <u-alert fontSize="16" class="animate__animated animate__backInDown" :title="alertTitle" type="error">
    </u-alert>
    <u-collapse class="step-content" accordion>
      <u-collapse-item title="1、学生验证不扣钱，持续1年">
        <text class="u-collapse-content">
          1、验证时<text style="color:red;font-size: 40upx;font-weight: bold;">人脸或指纹不会扣钱！</text>放心继续
        </text>

        <text class="u-collapse-content">
          <view>2、每年下单<text style="">维持1年</text>，音乐界面会提前1个月<text style="color:red">弹窗提醒验证</text></view>
        </text>
      </u-collapse-item>
      <u-collapse-item title="2、无法验证、无法连接、白屏卡死？">
        <text class="u-collapse-content" style="font-size: 30upx;">
          <img src="https://article.biliimg.com/bfs/article/daef40c5b37a38a62949d5dc315860fd7924106b.png"
            style="margin: 0 auto;display: block;width: 90%;" />

          <view style="color:red;font-weight: bolder;font-size: 50upx;display: inline-block;"
            class="animate__animated animate__heartBeat animate__infinite ">请用夸克、谷歌</view>，<view style="">
            别用Safari、微信、百度</view>
        </text>
      </u-collapse-item>
    </u-collapse>
    <!-- 底部按钮 -->
    <view class="btn">
      <u-checkbox-group style="position: absolute;right: 0; bottom: 100upx;" v-model="checkboxValue1" placement="column"
        @change="checkboxChange">
        <u-checkbox class="animate__animated animate__shakeX" v-show="showAlert" labelSize="18" size="25" label="我已认真阅读"
          :name="true">
        </u-checkbox>
      </u-checkbox-group>
      <u-row gutter="10">
        <u-col span="6">
          <u-button class="animate__animated animate__slideInLeft animate__slower animate__repeat-2" @click="clickNext"
            type="error" plain shape="circle">上一步</u-button>
        </u-col>
        <u-col span="6">
          <u-button type="primary" @click="clickStart"
            :class="showModal ? '' : 'animate__animated animate__pulse animate__infinite'" shape="circle">开始验证
          </u-button>
        </u-col>
      </u-row>
    </view>
    <!-- <u-modal showCancelButton :closeOnClickOverlay="true" :show="showModal" title="为了高效沟通！" cancelText="我再想想"
      @close="showModal = false" @cancel="showModal = false" confirmColor="red" confirmText="继续！提问记得截图"
      @confirm="confirmStart" :content='modalContent'>
    </u-modal> -->

    <u-modal width="740upx" title="" :closeOnClickOverlay="true" :show="showModal" @close="showModal = false"
      @cancel="showModal = false" showCancelButton cancelText="取消" confirmText="好的，开始验证！" @confirm="confirmStart">
      <view>
        <img referrer="no-referrer|origin|unsafe-url" class="animate__animated animate__flipInX"
          src="https://article.biliimg.com/bfs/article/f277d4422bb25a98760bd9c70f7e1fd6e0aa46d4.jpg"
          style="height: 520rpx;display:block;margin:0 auto;border: 2px solid #ff4c4c;border-radius: 10px;" />
        <view style="font-size: 30upx;">
          <view>提醒消失就已成功，无需二次向客服确认</view>
          <view>仔细阅读👉 由于学生方案是包月，非包年。所以成功后
            <span style="color:red;">【续期时间不显示为明年】</span>
          </view>
          如未成功，<view style="color:red;font-weight: bolder;font-size: 60upx;display: inline-block;"
            class="animate__animated animate__shakeY animate__infinite">必须
          </view>
          <view>点开【系统设置头像订阅am】截图客服</view>
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
        alertTitle: `为减少客服压力
        1、验证资格消失就算成功，无需二次向客服确认
        2、成功后，无需致谢客服，仔细阅读👇`,

        showModal: false,
        modalContent: `👇如需咨询客服，请一定带上以下截图

        打开【系统设置头像订阅Apple Music】
        `,
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
    methods: {
      clickNext() {
        uni.$emit('nextStep')
      },
      checkboxChange(val) {
        this.checkboxValue1 = val
        uni.$u.reportIp()
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
      startVerify() {
        const encryptLink =
          'gN5JgbLx8e3umjHbwMXXmd1JLCOWYyJxnt0xR5a/GTXC6zrVdY6j9/7d7d3zrMicYpNr9ObDKpBwmg9DBuVPf47DFIZypn/EBfRJSaIFeUH2HeIGAuuAks4xQKRD0MfBVCwN6CgZcNBNimWvoDOU6cFBaPbohgWDIH2tziDcYiaDC6EGUT4FUlQyWYqNSd0sopagBlZnwI60A88Bn2QGqwiJY9OI36nnFIsPCsUhN9ixMBMRMaWhI6iFgbvPNrppjmFghqP4mHcAXcs+P1sFo/vC21jr8Ze7A+5CZO89aZ+FPQDqys7w5rigGW/7yYwChQMY7/4tqskSCChlGtm/AQ=='
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
      bottom: 0;
      text-align: right;
    }

    img {
      pointer-events: none;
    }
  }
</style>

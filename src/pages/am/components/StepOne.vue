<template>
  <view class="container">
    <u-notify ref="uNotify"></u-notify>
    <u-divider text="未订阅必须先订阅"></u-divider>
    <u-radio-group v-model="radiovalue7" :borderBottom="true" placement="column" iconPlacement="right"
      @change="groupChange">
      <u-radio :customStyle="{marginBottom: '8px'}" v-for="(item, index) in radiolist7" :key="index" :label="item.label"
        :name="item.name">
      </u-radio>
    </u-radio-group>
    <view class="btn">
      <u-alert fontSize="16" style="position: absolute; bottom: -160upx;width: 100%;" v-show="showAlert"
        class="animate__animated animate__shakeX" :title="alertTitle" :type="alertType" :effect="alertEffect">
      </u-alert>
      <view v-if="radiovalue7 === 1">
        <u-button class="shadow animate__animated animate__pulse animate__slow animate__infinite"
          style="position: absolute; bottom: 200upx;" @click="subscribePersonal" type="error">第一步：先打开苹果音乐软件，开通个人方案
        </u-button>
        <view style="color:gray;" v-show="this.radiovalue7 === 1" class="animate__animated animate__slideInRight">
          或，试用过已过期需花10元重开，下月起5元！全网都如此，若不愿重开，<a href="javascript:;" @click="showRefund=true">可申请退单终止验证</a>
        </view>
      </view>
    </view>
    <u-divider text="订阅中才可下一步"></u-divider>
    <u-button class="next-btn animate__animated animate__pulse animate__slow animate__infinite" v-if="radiovalue7 !==1"
      @click="clickNext" type="error" plain shape="circle">{{buttonText}}
    </u-button>
    <!-- 窗口 -->
    <u-modal @close="showExpireModal = false" :show="showExpireModal" confirmText="确定"
      @confirm="showExpireModal = false">
      <view>
        <text style="color:red">自己先到苹果音乐里开通个人方案，</text>
        因为苹果<text style="color:red">仅限订阅中</text>才可升级学生
        <view style="color:gray;font-size:30upx;margin-top:10upx">
          如果您是过期用户，且不愿花10元开通，可在情况1中发起退款！
        </view>
      </view>
    </u-modal>
    <u-modal @close="showBye = false" :show="showBye" title="相逢即缘，好聚好散，再见！" confirmText="请前往订单发起退款！"
      @confirm="confirmBye">
      <view style="font-size: 40upx; text-align: justify;">
        <u-alert fontSize="20" title="退款选择以下原因，系统自动秒退，免人工审核！" type="error"></u-alert>
        <u-gap></u-gap>
        <view style="color:red;text-decoration:underline;">未收到货，退款原因选择：其他/协商一致</view>
      </view>
    </u-modal>
    <u-modal @close="closeRefund" title="退单协议" showCancelButton :closeOnClickOverlay="true" :show="showRefund"
      cancelText="取消" confirmText="继续退单" confirmColor="red" @cancel="closeRefund" @confirm="confirmRefund">
      <view style="color:gray">
        由于苹果仅限<text style="color:red">订阅中</text>的用户，才可升级学生套餐。因此过期用户需花10元重开，且10元<text style="color:red">不可退</text>。
        <view style="margin-top: 20upx;"><text style="color:red">全网都是如此</text>，如果不继续，可跟客服申请退单，<text
            style="color:red">退款原因：其他/协商一致</text></view>

        <u-checkbox-group style="margin-top: 20upx;" v-model="checkboxValue1" placement="column"
          @change="checkboxChange">
          <u-checkbox class="checkbox animate__animated animate__shakeX" v-show="showRefundAlert" labelSize="18"
            size="25" label="确定终止验证，继续退单！" :name="true">
          </u-checkbox>
        </u-checkbox-group>
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
        showNotify: false,
        showRefund: false,
        showRefundAlert: true,
        showBye: false,
        checkboxValue1: [false],
        showExpireModal: false,
        showAlert: true,
        alertType: 'error',
        alertTitle: `👆 没开或已停，选1
        
        
        
        是否开着苹果音乐套餐？
        
        
        
        👇 开着，选2
        `,
        alertEffect: 'light',
        radiolist7: [{
            label: '1、未订阅：已过期、已取消、未开通',
            name: 1,
            disabled: false
          },
          {
            label: '2、订阅中：开着10元方案、或学生续期',
            name: 2,
            disabled: false
          },
        ],
        radiovalue7: 0,
        buttonText: '请选择是否订阅中',
        showRenewModal1: false,
      }
    },
    methods: {
      subscribePersonal() {
        window.open('musics://music.apple.com/deeplink?app=music&p=subscribe')
      },
      closeRefund() {
        this.checkboxValue1 = [false]
        this.showRefund = false
      },
      checkboxChange(val) {
        this.checkboxValue1 = val
        uni.$u.reportIp()
      },
      groupChange(n) {
        switch (n) {
          case 1:
            this.alertType = 'error'
            this.alertTitle = `第二步：开通10元方案后，
            选2、订阅中 👇 免费升级为5元`
            this.alertEffect = 'light'
            this.buttonText = '自己先去开个人方案，开完按情况2升级'
            break
          case 2:
            this.alertType = 'error'
            this.alertTitle = `👆 未订阅必须选1， 否则将失败
            
            
            
            
            
            
            
            
            👇 订阅中（可以下一步）`
            this.alertEffect = 'light'
            this.buttonText = '已在订阅中，下一步'
            break
        }
        uni.$u.reportIp()
      },
      notify() {
        this.$refs.uNotify.show({
          top: 1,
          type: 'error',
          color: '#fff',
          bgColor: '#ff4c4c',
          message: `
            自己先到音乐开10元方案
            再回来按情况2升级`,
          duration: 1000 * 10,
          fontSize: 20,
          safeAreaInsetTop: true
        })
      },
      confirmRefund() {
        uni.$u.reportIp()
        if (!this.checkboxValue1[0]) {
          this.showRefundAlert = false
          this.$nextTick(() => {
            this.showRefundAlert = true
          })
        } else {
          uni.$u.http.post('/pms/am/c/refund', {}, {
            params: {
              code: this.code
            }
          }).then(res => {
            if (res.success) {
              this.showRefund = false
              this.showBye = true
              uni.$emit('addInvalidCode', false)
            }
          })
        }
      },
      confirmBye() {
        uni.$emit('addInvalidCode')
      },
      clickNext() {
        uni.$u.reportIp()
        if (this.radiovalue7 < 2) {
          if (this.radiovalue7 === 1) {
            this.notify()
            this.showExpireModal = true
          }
          this.showAlert = false
          this.$nextTick(() => {
            this.showAlert = true
          })
        } else if (this.radiovalue7 === 2) {
          // this.showRenewModal1 = true
          uni.$emit('nextStep')
        }
      },
      confirmNext() {
        uni.$emit('nextStep')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    position: relative;
    height: 900upx;

    .btn {
      position: absolute;
      bottom: 480upx;
      width: 100%;
    }

    .next-btn {
      position: absolute;
      bottom: 0upx;
    }

    img {
      pointer-events: none;
    }

    ::v-deep .u-border-bottom:first-child {
      margin-bottom: 500upx !important;
    }

    ::v-deep .u-border-bottom {
      border-bottom: none !important;
    }
  }
</style>

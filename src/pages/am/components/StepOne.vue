<template>
  <view class="container">
    <u-notify ref="uNotify"></u-notify>
    <u-divider text="订阅中才可升级、续期"></u-divider>
    <u-radio-group v-model="radiovalue7" :borderBottom="true" placement="column" iconPlacement="right"
      @change="groupChange">
      <u-radio :customStyle="{marginBottom: '8px'}" v-for="(item, index) in radiolist7" :key="index" :label="item.label"
        :name="item.name">
      </u-radio>
    </u-radio-group>
    <view style="margin-top: 60upx;color:gray" v-show="this.radiovalue7 === 1"
      class="animate__animated animate__slideInRight">
      已过期不愿花10元开，<a href="javascript:;" @click="showRefund=true">点这里申请退款</a>
    </view>
    <view class="btn">
      <u-alert style="position: absolute; bottom: 120upx;width: 100%;" v-show="showAlert"
        class="animate__animated animate__shakeX" :title="alertTitle" :type="alertType" :effect="alertEffect">
      </u-alert>
      <u-button @click="clickNext" type="error" plain shape="circle">{{buttonText}}
      </u-button>
    </view>
    <u-modal @close="showExpireModal = false" title="请先到苹果音乐里开通个人方案" closeOnClickOverlay :show="showExpireModal"
      confirmText="确定" @confirm="showExpireModal = false">
      <view>
        由于苹果仅限订阅中的用户，才可升级学生方案，请先到苹果音乐里开通个人方案，再按情况2进行升级！
        <view>
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
    <u-modal @close="showRefund = false" title="退款协议" showCancelButton :closeOnClickOverlay="true" :show="showRefund"
      cancelText="取消" confirmText="继续退款" confirmColor="red" @cancel="showRefund=false" @confirm="confirmRefund">
      <view>
        由于苹果仅限订阅中的用户，才可升级学生方案，为提高客服满意度，少数过期用户可能不愿花10元开通，可申请退款，升级链将被自动回收。申请后，请自行前往订单提交退款申请，<text
          style="color:red">退款原因：其他/协商一致</text>
        <u-checkbox-group v-if="showRefund" v-model="checkboxValue1" placement="column" @change="checkboxChange">
          <u-checkbox class="animate__animated animate__shakeX" v-show="showRefundAlert" labelSize="18" size="25"
            label="我已明确，继续退款！" :name="true">
          </u-checkbox>
        </u-checkbox-group>
      </view>
    </u-modal>
    <u-modal title="看清楚，很重要！" showCancelButton :closeOnClickOverlay="true" :show="showRenewModal1" cancelText="继续，我懂了！"
      @close="showRenewModal1 = false" @cancel="confirmNext" cancelColor="red" confirmText="稍等，我懵了！" confirmColor="gray"
      @confirm="showRenewModal1 = false">
      <img referrer="no-referrer|origin|unsafe-url" class="animate__animated animate__flipInX"
        src="https://article.biliimg.com/bfs/article/7b874bde1ce69b4096656e2668f6d348fd06f3aa.png"
        style="width: 600rpx;height: 600rpx;" />
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
        alertTitle: `👆 请正确选择您的情况！`,
        alertEffect: 'light',
        radiolist7: [{
            label: '情况1、未订阅：已过期、已取消、新用户',
            name: 1,
            disabled: false
          },
          {
            label: '情况2、订阅中：个人方案、或学生续期',
            name: 2,
            disabled: false
          },
        ],
        radiovalue7: 0,
        buttonText: '下一步',
        showRenewModal1: false,
      }
    },
    methods: {
      checkboxChange(val) {
        this.checkboxValue1 = val
        uni.$u.reportIp()
      },
      groupChange(n) {
        switch (n) {
          case 1:
            this.alertType = 'error'
            this.alertTitle = `需先订阅，再按情况2
            
            情况1.1：过期用户
            先到音乐里花10元订阅个人方案，10元苹果收，不可退！再按情况2
            
            情况1.2：新用户、已取消
            先到音乐里免费订阅个人方案，若试用过无免费，按情况1.1`
            this.alertEffect = 'light'
            this.buttonText = '先到音乐里开通个人方案，再按情况2升级'
            break
          case 2:
            this.alertType = 'success'
            this.alertTitle = `情况2.1：个人方案订阅中
            没过期、没取消，若过期按情况1先开后升，否则将失败
            
            情况2.2：学生方案订阅中
            苹果提醒我【验证学生资格】
`
            this.alertEffect = 'dark'
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
          message: '先开通个人方案，再按情况2升级',
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
          this.showRenewModal1 = true
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
    height: 950upx;

    .btn {
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    img {
      pointer-events: none;
    }
  }
</style>

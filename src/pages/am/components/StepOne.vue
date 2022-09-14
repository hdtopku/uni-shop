<template>
  <view class="container">
    <u-divider textSize="16" text="若未订阅：必须先订阅个人，再升级"></u-divider>
    <!-- 选择1或2 -->
    <u-radio-group v-model="radiovalue7" :borderBottom="true" placement="column" iconPlacement="right"
      @change="$u.debounce(groupChange(radiovalue7), 600, true)">
      <u-radio :customStyle="{marginBottom: '8px'}" v-for="(item, index) in radiolist7" :key="index" :label="item.label"
        :name="item.name">
      </u-radio>
    </u-radio-group>

    <!-- 选项中间的警告 -->
    <u-alert fontSize="16" style="position: absolute; top: 135upx;width: 100%;" v-show="showAlert && radiovalue7 !== 1"
      class="animate__animated animate__shakeX" :title="alertTitle" type="error" effect="light">
    </u-alert>

    <!-- 底部按钮 -->
    <view class="btn">
      <!-- 未订阅 -->
      <view v-if="radiovalue7 === 1">
        <view v-show="this.radiovalue7 === 1"
          class="explain animate__animated animate__flipInX animate__delay-3s animate__slower"
          style="font-size: 28upx;">
          说明：因官方改版，
          <view style="color:red;font-weight: bolder;font-size: 38upx;display: inline-block;"
            class="animate__animated animate__shakeY animate__infinite">必须</view>
          <span><span style="color:red;"></span><a href="javascript:;" @click="subscribePersonal">先开个人</a>(<span
              style="text-decoration: underline;font-weight: bolder;"><span
                style="color:red;font-size: 26upx;">是否免费开</span>，以音乐界面为准。家庭和声控不行</span>)</span>，<span
            style="color:red;">第二步</span><a href="javascript:;" @click="$u.debounce(clickNext, 600, true)">升级</a>为5元
          <view style="color:red;font-weight: bolder;font-size: 38upx;display: inline-block;">必须<a href="javascript:;"
              @click="subscribePersonal">先开个人</a><span style="font-size: 26upx;">，若已过期不愿10元开</span><a
              href="javascript:;" @click="showRefund=true">点此退单</a>
          </view>
        </view>
        <u-button shape="circle" plain
          class="shadow animate__animated animate__heartBeat animate__slow animate__infinite"
          style="position: absolute; bottom: 200upx;" @click="subscribePersonal" type="error">第一步：打开苹果音乐，开通个人方案
        </u-button>
        <u-button plain shape="circle"
          class="shadow animate__animated animate__heartBeat animate__slow animate__infinite"
          style="position: absolute; bottom: -110upx;z-index: 1;" @click="$u.debounce(clickNext, 600, true)"
          type="error">
          第二步：升级为学生方案
        </u-button>
        <u-alert fontSize="10" style="position: absolute;bottom: -170upx;right:0;" description="注意：必须先开个人，才可第二步"
          type="success">
        </u-alert>
      </view>
    </view>

    <!-- 订阅中按钮 -->
    <u-button class="next-btn animate__animated animate__heartBeat animate__slower animate__infinite"
      v-if="radiovalue7 !==1" @click="clickNext" type="error" plain shape="circle">{{buttonText}}
    </u-button>

    <!-- 退单协议 -->
    <u-modal width="740upx" @close="closeRefund" title="退单协议" showCancelButton :closeOnClickOverlay="true"
      :show="showRefund" cancelText="取消" confirmText="继续退单" confirmColor="red" @cancel="closeRefund"
      @confirm="$u.debounce(confirmRefund, 600, true)">
      <view style="color:gray;font-size: 35upx;">
        由于苹果仅限<text style="color:red">订阅中</text>的用户，才可升级学生套餐，因此过期用户需花10元重开。
        <u-divider textColor="red" textSize="20" text="👇 注意！请尊重卖家劳动👇"></u-divider>
        若已进行<text style="color:red">第二步且成功，还恶意退款</text>，将登记至同类型店铺，<text
          style="color:red;text-decoration: underline;">终身禁止验证</text>！
        <u-checkbox-group style="margin-top: 20upx;float: right;" v-model="checkboxValue1" placement="column"
          @change="$u.debounce(checkboxChange, 600, true)">
          <u-checkbox class="checkbox animate__animated animate__shakeX" v-show="showRefundAlert" labelSize="18"
            size="25" label="确定非恶意退款，继续退单！" :name="true">
          </u-checkbox>
        </u-checkbox-group>
      </view>
    </u-modal>

    <!-- 退单完成 -->
    <u-modal @close="showBye = false" :show="showBye" title="好聚好散！" confirmText="请前往订单发起退款！" @confirm="confirmBye">
      <view style="font-size: 40upx; text-align: justify;">
        <view style="color:red;">退款选：未收到货、协商一致，并说明原因！</view>
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
        showRefund: false,
        showRefundAlert: true,
        showBye: false,
        checkboxValue1: [false],
        showAlert: true,
        alertTitle: `👆 没开或已停，选1
        
        
        
        
        是否开着苹果音乐套餐？不清楚请选1👆
        
        
        
        
        👇 开着，选2
        `,
        radiolist7: [{
            label: '1、未订阅：已过期、已取消、未开通',
            name: 1,
            disabled: false
          },
          {
            label: '2、订阅中：试用中、开着10元方案、或学生续期',
            name: 2,
            disabled: false
          },
        ],
        radiovalue7: 0,
        buttonText: '请选择是否订阅中',
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
      groupChange(n = 1) {
        uni.$u.reportIp()
        this.showAlert = false
        this.$nextTick(() => {
          this.showAlert = true
        })

        switch (n) {
          case 1:
            this.alertTitle = `第二步：开通10元方案后，立即回来
            选2，立即升级为5元方案👇👇👇`
            this.buttonText = '自己先去开个人方案，开完按情况2升级'
            break
          case 2:
            this.alertTitle = `👆 若未订阅必须选1：先订阅个人，再升级`
            this.buttonText = '已在订阅中，下一步：免费升级续期学生方案'
            break
        }
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
        if (this.radiovalue7 < 1) {
          this.showAlert = false
          this.$nextTick(() => {
            this.showAlert = true
          })
        } else if (this.radiovalue7 === 1 || this.radiovalue7 === 2) {
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

    .explain {
      position: absolute;
      top: -180upx;
      color: gray;
      border: 1px dashed red;
      border-radius: 10upx;
    }

    .btn {
      position: absolute;
      bottom: 480upx;
      width: 100%;
    }

    .next-btn {
      position: absolute;
      bottom: 50upx;
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

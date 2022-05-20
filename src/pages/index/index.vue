<template>
  <page class="page-container">
    <u-steps :current="currentStep" iconPlacement="right">
      <u-steps-item title="加入会员" desc="需先加入会员"></u-steps-item>
      <u-steps-item title="开始验证" desc="按步骤开始即可"></u-steps-item>
    </u-steps>
    <u-divider :text="currentStep === 0 ? '请正确选择您的情况' : '开始验证前请仔细阅读以下问题'"></u-divider>
    <!-- 步骤1 -->
    <view class="step-content" v-show="currentStep === 0">
      <u-radio-group v-model="radiovalue7" :borderBottom="true" placement="column" iconPlacement="right"
        @change="groupChange">
        <u-radio :customStyle="{marginBottom: '8px'}" v-for="(item, index) in radiolist7" :key="index"
          :label="item.label" :name="item.name">
        </u-radio>
      </u-radio-group>
      <u-alert v-show="showAlert" class="animate__animated animate__headShake" :title="alertTitle" :type="alertType"
        :effect="alertEffect" showIcon>
      </u-alert>
    </view>
    <!-- 步骤2 -->
    <view class="step-content" v-show="currentStep === 1">
      <u-collapse accordion>
        <u-collapse-item title="1、如何验证？">
          <text class="u-collapse-content">
            点击下方开始验证，顺着点，直到成功升级！

            提示：需指纹或人脸？不会扣费，请放心继续！
          </text>
        </u-collapse-item>
        <u-collapse-item title="2、是否成功？">
          <text class="u-collapse-content">
            点开【系统设置头像订阅】，学生(1个月) 5元勾上
            并且【验证您的学生身份】消失即成功。
          </text>
        </u-collapse-item>
        <u-collapse-item title="3、慢打不开？">
          <text class="u-collapse-content">
            网差慢，耐心等。

            这3个方法都试试：重启手机、换网、
            换其他iphone、ipad设备重来、或翻q
          </text>
        </u-collapse-item>
        <u-collapse-item title="4、优惠期限？">
          <text class="u-collapse-content">
            苹果官方1-4年会对资格抽查
            如果抽到：音乐界面会提前一个月提示验证
            则需要来这边重新下单续期！

            【注意】有个别客户360天说提示验证，以不到365天为由，要求客服免费加一年。
            特别提示：人工和升级链均需成本，希望客户能尊重客服的劳动。
          </text>
        </u-collapse-item>
      </u-collapse>
    </view>
    <!-- 底部按钮 -->
    <view>
      <u-button @click="clickNext" type="error" plain shape="circle" v-show="currentStep === 0">下一步</u-button>
      <view v-show="currentStep !== 0">
        <u-row class="u-flex" gutter="10">
          <u-col span="6">
            <u-button @click="clickNext" type="error" plain shape="circle">上一步</u-button>
          </u-col>
          <u-col span="6">
            <u-button type="primary" @click="clickStart" shape="circle">开始验证</u-button>
          </u-col>
        </u-row>
      </view>
      <u-checkbox-group style="margin: 30upx 0;float: right;" v-show="currentStep === 1 && showAlert"
        class="px-4 animate__animated animate__headShake" v-model="checkboxValue1" placement="column"
        @change="checkboxChange">
        <u-checkbox labelSize="18" size="25" label="我已认真阅读并知晓所有问题，可以开始验证！" :name="true">
        </u-checkbox>
      </u-checkbox-group>
      <u-modal showCancelButton :closeOnClickOverlay="true" :show="showModal" title="提问必须带上截图！" cancelText="我再想想"
        @close="showModal = false" @cancel="showModal = false" confirmColor="red" confirmText="继续！保证会截图"
        @confirm="confirm" :content='modalContent'>
      </u-modal>
      <u-modal showCancelButton :closeOnClickOverlay="true" :show="showRenewModal" title="验证完，日期没加1年？"
        cancelText="继续！我保证已看懂" @close="showRenewModal = false" @cancel="confirmRenew" cancelColor="red"
        confirmText="懵了！再想想" confirmColor="gray" @confirm="showRenewModal = false" :content='renewModalContent'>
      </u-modal>
    </view>
  </page>
</template>

<script>
  export default {
    data() {
      return {
        showAlert: true,
        currentStep: 0,
        showRenewModal: false,
        renewModalContent: '',
        showModal: false,
        modalContent: `有疑问？
        必须【系统设置头像订阅】截图给客服，再提问！这是唯一有效提问凭证！
        
        没疑问，很快很满意！
        记得给小店好的评哦！
        `,
        checkboxValue1: [false],
        alertType: 'error',
        alertTitle: '请正确选择您的情况，否则可能导致验证失败！',
        alertEffect: 'light',
        nextDisabled: true,
        radiolist7: [{
            label: '1、我是新用户，目前还有免费试用',
            name: 1,
            disabled: false
          },
          {
            label: '2、我的订阅已过期或已取消，目前未订阅',
            name: 2,
            disabled: false
          },
          {
            label: '3、我是个人方案订阅中，需要升级为学生方案',
            name: 3,
            disabled: false
          },
          {
            label: '4、我是学生方案订阅中，苹果提示我验证资格',
            name: 4,
            disabled: false
          },
        ],
        radiovalue7: 0,
      }
    },
    onLoad(option) {
      // uni.$u.checkAmEnv()
      this.getYear()
    },
    methods: {
      getYear() {
        let date = new Date();
        let thisYear = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        let nextYear = (date.getFullYear() + 1) + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        this.renewModalContent = `问：假设续期时间：${thisYear}
        验证完，为啥不是：${nextYear}
        （切记您的方案是包月，非包年！）
        
        答：【验证您的学生身份】消失即成功！`
      },
      checkboxChange(val) {
        this.checkboxValue1 = val
      },
      copyLink() {
        // #ifdef H5
        let url = location.href
        uni.setClipboardData({
          data: location.href,
          success: () => {
            uni.$u.msg('链接已复制，请前往验证')
          }
        })
        this.showModal = true
        // #endif
      },
      groupChange(n) {
        switch (n) {
          case 1:
            this.alertType = 'error'
            this.alertTitle = `请先到苹果音乐中【免费开通个人方案】，然后选择情况3继续！
            
            温馨提示：若无免费试用，说明您之前已试用过，过期了或被您取消了。您已不是新用户，请按照情况2继续！`
            this.alertEffect = 'dark'
            this.nextDisabled = true
            break
          case 2:
            this.alertType = 'error'
            this.alertTitle = `请先到苹果音乐中【花费10元开通个人方案】，开通后选择情况3继续！
            
            温馨提示：下个月起5元，10元由苹果收取且不可退还！`
            this.alertEffect = 'dark'
            this.nextDisabled = true
            break
          case 3:
            this.alertType = 'success'
            this.alertTitle = `我保证已经处于【个人方案】中，且未取消、未过期，可以进入下一步！
            `
            this.alertEffect = 'dark'
            this.nextDisabled = false
            break
          case 4:
            this.alertType = 'success'
            this.alertTitle = `我保证已经处于【学生方案】中，且未取消、未过期，目前苹果提示我验证资格，可以下一步！
`
            this.alertEffect = 'dark'
            this.nextDisabled = false
            break
        }
      },
      clickNext() {
        if (this.currentStep === 0 && this.radiovalue7 < 3) {
          this.showAlert = false
          this.$nextTick(() => {
            this.showAlert = true
          })
        } else if (this.currentStep === 0 && this.radiovalue7 == 4) {
          this.showRenewModal = true
        } else {
          this.currentStep = ++this.currentStep % 2
        }
      },
      clickStart() {
        if (this.currentStep === 1 && !this.checkboxValue1[0]) {
          this.showAlert = false
          this.$nextTick(() => {
            this.showAlert = true
          })
        } else {
          this.showModal = true
        }
      },
      confirm() {
        // #ifdef H5
        window.open(
          'https://itunes.apple.com/studentSubscriptionOffers?app=music&ud_h=cEv3MQq6Aj8alkFkGwcFECset/pXKjxW4sOwjpMqLTGlRDLIgBehkWv7FMiolTRwZT1OspZE76LOzh70DftfFw==&ud_s=lu71Beg7pESvcKjG7JPTdQ==&ud_t=1629938295'
        )
        // #endif
      },
      confirmRenew() {
        this.showRenewModal = false
        this.currentStep = ++this.currentStep % 2
      }
    }
  }
</script>

<style lang="scss">
  .page-container {
    padding: 20upx;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    .font-60 {
      font-size: 60upx;
    }

    .step-content {
      height: 60vh;
      width: 90vw;
      overflow: scroll;
      padding-bottom: 100upx;

      .chrome-image {
        margin: 20upx auto;
      }
    }
  }
</style>

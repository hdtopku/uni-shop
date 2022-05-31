<template>
  <page v-if="showPage" class="page-container">
    <u-steps :current="currentStep" iconPlacement="right">
      <u-steps-item title="加入会员" desc="需先加入会员"></u-steps-item>
      <u-steps-item title="开始验证" desc="按步骤开始即可"></u-steps-item>
    </u-steps>
    <u-divider :text="currentStep === 0 ? '请正确选择您的情况' : '仔细阅读，不必求助客服'"></u-divider>
    <!-- 步骤1 -->
    <view class="step-content" v-show="currentStep === 0">
      <u-radio-group v-model="radiovalue7" :borderBottom="true" placement="column" iconPlacement="right"
        @change="groupChange">
        <u-radio :customStyle="{marginBottom: '8px'}" v-for="(item, index) in radiolist7" :key="index"
          :label="item.label" :name="item.name">
        </u-radio>
      </u-radio-group>
      <u-alert v-show="showAlert" class="animate__animated animate__shakeX" :title="alertTitle" :type="alertType"
        :effect="alertEffect" showIcon>
      </u-alert>
    </view>
    <!-- 步骤2 -->
    <view class="step-content" v-show="currentStep === 1">
      <u-collapse accordion>
        <u-collapse-item title="1、如何验证？">
          <text class="u-collapse-content">
            点开始验证，并顺着点，直到成功！

            提示：无论指纹或人脸多少次，苹果不会二次扣费，请放心人脸或指纹！
          </text>
        </u-collapse-item>
        <u-collapse-item title="2、是否成功？">
          <text class="u-collapse-content">
            点开【系统设置头像订阅Apple Music】

            1、学生(1个月) 5元勾上
            2、且【验证大学生身份】提醒消失即成功。
          </text>
        </u-collapse-item>
        <u-collapse-item title="3、慢打不开？">
          <text class="u-collapse-content">
            网差慢，耐心等待。

            还可以重启手机、换网、
            换其他iphone、ipad设备重来、或翻q
          </text>
        </u-collapse-item>
        <u-collapse-item title="4、优惠期限？">
          <text class="u-collapse-content">
            苹果1-4年会抽查资格
            如果抽到：音乐界面会提前一个月提醒验证
            则需要来这边下单续！

            【注意】有极个别客户360天说提示验证，以不到365天为由，要求客服免费加一年（一共验证不了几次，人工和升级链均需成本，希望能尊重客服的劳动）
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
            <u-button class="animate__animated animate__slideInLeft animate__slower animate__repeat-2"
              @click="clickNext" type="error" plain shape="circle">上一步</u-button>
          </u-col>
          <u-col span="6">
            <u-button type="primary" @click="clickStart" shape="circle">开始验证</u-button>
          </u-col>
        </u-row>
      </view>
      <u-checkbox-group style="margin: 30upx 0;float: right;" v-show="currentStep === 1 && showAlert"
        class=" animate__animated animate__shakeX" v-model="checkboxValue1" placement="column" @change="checkboxChange">
        <u-checkbox labelSize="18" size="25" label="我已认真阅读（所有问题以上都能解答）" :name="true">
        </u-checkbox>
      </u-checkbox-group>
      <u-modal showCancelButton :closeOnClickOverlay="true" :show="showModal" title="提问必须带上截图！" cancelText="我再想想"
        @close="showModal = false" @cancel="showModal = false" confirmColor="red" confirmText="继续！保证会截图"
        @confirm="confirm" :content='modalContent'>
      </u-modal>
      <u-modal showCancelButton :closeOnClickOverlay="true" :show="showRenewModal" title="非常重要！请看清楚"
        cancelText="继续！我保证没过期" @close="showRenewModal = false" @cancel="confirmRenew" cancelColor="red"
        confirmText="懵了！我再想想" confirmColor="blue" @confirm="showRenewModal = false" :content='renewModalContent'>
      </u-modal>
      <u-modal showCancelButton :closeOnClickOverlay="true" :show="showRenewModal1" cancelText="日期不变、提醒消失"
        @close="showRenewModal1 = false" @cancel="confirmRenew" cancelColor="red" confirmText="懵了！我再看看"
        confirmColor="blue" @confirm="showRenewModal1 = false" :content='renewModalContent'>
        <view class="animate__animated animate__flipInX"
          style="background-image: url('https://article.biliimg.com/bfs/article/89f030de49f21e74881bf2a6145ae009ae94344c.png');background-size: contain;background-repeat: no-repeat;width: 600rpx;height: 600rpx;">
        </view>
      </u-modal>
    </view>
  </page>
</template>

<script>
  import {
    saveAsyncInfo
  } from '@/a/core/info.js'
  export default {
    data() {
      return {
        showPage: false,
        showAlert: true,
        currentStep: 0,
        showRenewModal: false,
        showRenewModal1: false,
        renewTitle: '',
        renewCancelText: '',
        renewModalContent: '',
        showModal: false,
        modalContent: `有疑问？
        必须【系统设置头像订阅Apple Music】先截图，再提问！这是唯一有效凭证！
        
        没疑问！很满意，好评！
        `,
        checkboxValue1: [false],
        alertType: 'error',
        alertTitle: `请正确选择您的情况！
        
        不难，按教程1分钟搞定！
        `,
        alertEffect: 'light',
        nextDisabled: true,
        radiolist7: [{
            label: '1、我是新用户，还有免费试用',
            name: 1,
            disabled: false
          },
          {
            label: '2、我已过期或已取消，目前未订阅',
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
      // this.queryCode()
      let env = true
      // let env = uni.$u.checkAmEnv()
      if (env) {
        this.showPage = true
        uni.setNavigationBarTitle({
          title: '苹果音乐学生验证'
        })
      }
    },
    onShow(option) {},
    methods: {
      queryCode() {
        let pages = getCurrentPages();
        let curPage = pages[pages.length - 1]
        let curParam = curPage.options || curPage.$route.query;
        let code = curParam.c
        // 验证码非法
        let codes = uni.$u.getCache('cs') ?? []
        if (code == null || codes?.includes(code)) {
          // 验证码不合法
          uni.$u.removePage()
          return
        }
        // 验证码合法，但不是iosChrome
        let codes1 = uni.$u.getCache('cs1') ?? []
        if (!codes1?.includes(code)) {
          uni.$u.http.get('/pms/am/queryCode', {
            params: {
              code
            }
          }).then(res => {
            // 验证码合法，但环境不是iosChrome，10分钟不查后端
            codes1.push(code)
            uni.$u.setCache('cs1', codes1, 60 * 10)
            if (res?.success) {
              // 验证码合法，但环境不是iosChrome，10分钟不查后端
              codes1.push(code)
              uni.$u.setCache('cs1', codes1, 60 * 10)
            } else {
              codes.push(code)
              uni.$u.setCache('cs', codes, 3600 * 24 * 30)
            }
          }).catch(err => {
            console.log(err)
            uni.$u.removePage()
            codes.push(code)
            uni.$u.saveCache('cs', codes, 3600 * 24 * 30)
          })
        }
        // let env = true
        let env = uni.$u.checkAmEnv()
        if (env) {
          this.reportIp(code)
          this.showPage = true
          uni.setNavigationBarTitle({
            title: '苹果音乐学生验证'
          })
        }
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
            this.alertTitle = `请先到苹果音乐中【免费开通个人方案】，然后选情况3继续！
            
            温馨提示：若无免费试用，说明您之前试用过，过期了或被您取消了。请按照情况2继续！`
            this.alertEffect = 'dark'
            this.nextDisabled = true
            break
          case 2:
            this.alertType = 'error'
            this.alertTitle = `请先到苹果音乐中【花费10元开通个人方案】，然后选情况3继续！
            
            温馨提示：下个月起5元，10元苹果收取，不可退还！`
            this.alertEffect = 'dark'
            this.nextDisabled = true
            break
          case 3:
            this.alertType = 'success'
            this.alertTitle = `我保证【个人方案】未过期、未取消
            
            温馨提示：验证后月租半价
            `
            this.alertEffect = 'dark'
            this.nextDisabled = false
            break
          case 4:
            this.alertType = 'success'
            this.alertTitle = `苹果提醒我【验证学生资格】，提醒消失即成功续期、日期不变
`
            this.alertEffect = 'dark'
            this.nextDisabled = false
            break
        }
      },
      clickNext() {
        if (this.currentStep === 0) {
          if (this.radiovalue7 < 3) {
            this.showAlert = false
            this.$nextTick(() => {
              this.showAlert = true
            })
          } else if (this.radiovalue7 == 3) {
            this.renewModalContent = `1、我确定正在订阅中
            
            2、若过期先选情况2，否则将失败
            `
            this.showRenewModal = true
          } else if (this.radiovalue7 == 4) {
            let date = new Date();
            let thisYear = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            let nextYear = (date.getFullYear() + 1) + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            this.renewModalContent = `【验证资格】提醒消失即成功！
            成功后，续期时间不改变！
           
        因为您的方案包月：非包年！
        所以续期时间不是：${nextYear}
        `
            this.showRenewModal1 = true
          }
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
        let pages = getCurrentPages();
        let curPage = pages[pages.length - 1]
        let curParam = curPage.options || curPage.$route.query;
        // uni.$u.http.get('/pms/am/startVerify', {
        //   params: {
        //     code: curParam.c
        //   }
        // }).then(res => {
        //   if (res.code === 200 && res.result != null) {
        //     window.open(res.result)
        //   }
        // })
        // #endif
      },
      confirmRenew() {
        this.showRenewModal = false
        this.showRenewModal1 = false
        this.currentStep = ++this.currentStep % 2
      },
      reportIp(code) {
        let allInfo = uni.$u.getInfo()
        if (!allInfo.reportIp) {
          uni.$u.http.post('/pms/am/report', {}, {
            params: {
              info: uni.$u.encrypt({
                ip: allInfo.ip,
                sys: allInfo.sys,
                code
              }, true)
            }
          }).then(res => {
            console.log(res)
            if (res?.success) {
              uni.$u.saveRecordIp()
            }
          })
        }
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

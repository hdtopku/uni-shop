<template>
  <page class="page-container">
    是否为chrome：{{isChrome}}
    是否是ios：{{ios}}
    是否为isIosChrome：{{isIosChrome}}
    <view class="font-60" v-if="!ios">
      <u-alert effect="dark" title="提示：" type="error"
        description="安卓、windows或mac用户无法直接验证，您需借助iphone或ipad才可完成验证！请使用iphone或ipad打开此链接，再开始验证！" fontSize="25">
      </u-alert>
      <a href="javascript:;" @click="copyLink">点这里复制验证链接</a>
    </view>
    <view v-else>
      <view class="font-60" v-if="false">
        <u-modal :show="showModal" title="验证链接已复制" content='请前往chrome地址栏粘贴，并开始验证！' @confirm="showModal = false"
          :closeOnClickOverlay="true" @close="showModal = false"></u-modal>
        <u--image :showLoading="true"
          src="https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/0e/16/3b/0e163b57-2e3a-427c-e061-9fe4f6bf40a8/AppIcon-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-85-220.png/434x0w.webp"
          class="chrome-image" width="150" height="150"></u--image>
        必须使用chrome浏览器才可验证，
        <a href="https://apps.apple.com/cn/app/google-chrome/id535886823" text="请点这里下载谷歌浏览器" target="_blank"
          @click="click">请点这里下载谷歌浏览器</a>
        <br>
        如已下载chrome，
        <a href="javascript:;" @click="copyLink">请点这里复制验证链接</a>
      </view>
      <view v-if="true" style="position: relative">
        <u-steps :current="currentStep" iconPlacement="right">
          <u-steps-item title="加入会员" desc="需先加入会员"></u-steps-item>
          <u-steps-item title="开始验证" desc="按步骤开始即可"></u-steps-item>
        </u-steps>
        <u-divider :text="currentStep === 0 ? '请正确选择您的情况' : '开始验证前请仔细阅读以下问题'"></u-divider>
        <!-- 步骤1 -->
        <view class="step-content" v-show="currentStep === 0">
          <u-radio-group v-model="radiovalue7" :borderBottom="true" placement="column" iconPlacement="right"
            @change="groupChange">
            <u-radio :customStyle="{marginBottom: '16px'}" v-for="(item, index) in radiolist7" :key="index"
              :label="item.label" :name="item.name" @change="radioChange">
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
                点击下方开始验证，然后点红色或蓝色按钮，顺着点，直到成功升级！

                温馨提示：升级学生方案过程有指纹或人脸确认，不会二次扣费！直接放心继续即可
              </text>
            </u-collapse-item>
            <u-collapse-item title="2、慢打不开？">
              <text class="u-collapse-content">
                网差慢，耐心等。或这4个方法都试试：换网、翻q、重启手机重来、或换其他苹果设备试试
              </text>
            </u-collapse-item>
            <u-collapse-item title="3、优惠期限？">
              <text class="u-collapse-content">
                苹果官方1-4年会对资格抽查
                如果抽到：音乐界面会提前一个月提示验证
                则需要来这边重新下单续期！
              </text>
            </u-collapse-item>
            <u-collapse-item title="4、是否成功？">
              <text class="u-collapse-content">
                点开【系统设置头像订阅】：学生(1个月) 5元勾上，且没提示验证，即成功。
              </text>
            </u-collapse-item>
            <u-collapse-item title="5、日期没变？">
              <text class="u-collapse-content">
                您的方案是包月，非包年！
                5元方案勾上，且没提示验证，就已成功！！
                👉请勿反复问，谢谢支持！！！
              </text>
            </u-collapse-item>
            <u-collapse-item title="6、若未成功？【必须先截图】">
              <text class="u-collapse-content">
                ✅ 必须点开【系统设置头像订阅】，先截图再提问。
                ❌ 若未截图直接说：搞不定！客服将无法判断，因此必须截图给客服，才能精准解答！
              </text>
            </u-collapse-item>
          </u-collapse>

          <u-checkbox-group v-show="showAlert" class="px-4 animate__animated animate__headShake"
            v-model="checkboxValue1" placement="column" @change="checkboxChange">
            <u-checkbox labelSize="18" size="25" label="我已认真阅读并知晓所有问题，可以开始验证！" :name="true">
            </u-checkbox>
          </u-checkbox-group>
        </view>
      </view>
      <!-- 底部按钮 -->
      <view style="margin-top: 30upx;">
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
      </view>
    </view>
  </page>
</template>

<script>
  export default {
    data() {
      return {
        ios: true,
        isChrome: false,
        isIosChrome: false,
        showAlert: true,
        currentStep: 0,
        showModal: false,
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
        // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
        radiovalue7: 0,
      }
    },
    onLoad(option) {
      // let {
      //   platform
      // } = uni.getSystemInfoSync()
      // let sys = uni.getStorageSync('sys')
      // if (!sys && platform === 'ios') {
      //   this.ios = true
      // } else {
      //   uni.setStorage({
      //     data: 'false',
      //     key: 'sys'
      //   })
      //   this.ios = false
      //   let a = document.querySelector('uni-app')
      //   document.body.removeChild(a)
      //   let h1 = document.createElement('p')
      //   h1.innerHTML = `安卓、windows或mac用户无法直接验证，您需借助iphone或ipad才可完成验证！请使用iphone或ipad打开此链接，再开始验证！`
      //   h1.style = 'padding:200px 20px'
      //   document.body.appendChild(h1)
      // }
      this.isIosChrome = uni.$u.isIosChrome()
    },
    methods: {
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
            this.alertTitle = `我确保已经处于【个人方案】中，且未取消、未过期，可以进入下一步！
            
            温馨提示：如何判断是否成功升级学生方案？
            打开【系统设置头像订阅】，学生5元/月勾上即成功！日期没变？是因为您的方案是包月，非包年！
            升级过程中需人脸或指纹确认，但不会扣费，请爽快继续！
            `
            this.alertEffect = 'dark'
            this.nextDisabled = false
            break
          case 4:
            this.alertType = 'success'
            this.alertTitle = `我确保已经处于【学生方案】中，且未取消、未过期，目前苹果提示我验证资格，可以下一步！
            
            温馨提示：如何判断是否成功续期？
            打开【系统设置头像订阅】，没有提示验证，则此次续期成功！
            日期没变？是因为您的方案是包月，非包年！
            升级过程中需人脸或指纹确认，但不会扣费，请爽快继续！
`
            this.alertEffect = 'dark'
            this.nextDisabled = false
            break
        }
      },
      radioChange(n) {},
      clickNext() {
        if (this.currentStep === 0 && this.radiovalue7 < 3) {
          this.showAlert = false
          this.$nextTick(() => {
            this.showAlert = true
          })
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
          // #ifdef H5
          window.open('https://baidu.com')
          // #endif
        }
      },
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
      height: 63vh;
      width: 90vw;
      overflow: scroll;
      padding-bottom: 100upx;

      .animate__animated {
        position: absolute;
        bottom: 0;
      }

      .chrome-image {
        margin: 20upx auto;
      }
    }
  }

  ::v-deep .u-image {
    margin: 0 auto;
  }
</style>

<template>
  <view class="container">
    <u-divider text="请先仔细阅读"></u-divider>
    <u-collapse class="step-content" accordion>
      <u-collapse-item title="1、如何验证？">
        <text class="u-collapse-content">
          点开始验证，并顺着点，直到成功！

          提示：无论人脸或指纹多少次<text style="color:red;font-size: 40upx;font-weight: bold;">均免费</text>，<text
            style="color:red;font-size: 40upx;font-weight: bold;">不会扣费</text>，请放心人脸或指纹！
        </text>
      </u-collapse-item>
      <u-collapse-item title="2、无法验证？">
        <text class="u-collapse-content" style="font-size: 30upx;">
          <img src="https://article.biliimg.com/bfs/article/daef40c5b37a38a62949d5dc315860fd7924106b.png"
            style="margin: 0 auto;display: block;width: 90%;" />
          如图遇到<text style="color:red;">无法验证、无法连接、白屏卡死</text>
          <view style="color:red;font-weight: bolder;font-size: 50upx;display: inline-block;"
            class="animate__animated animate__heartBeat animate__infinite ">用夸克、谷歌</view>等可解决，别用<text
            style="color:red;">Safari、微信、百度</text>
        </text>
      </u-collapse-item>
      <!-- <u-collapse-item title="3、是否成功？">
        <text class="u-collapse-content">
          点开【系统设置头像订阅Apple Music】

          1、学生(1个月) 5元勾上
          2、且【验证大学生身份】<text style="color:red">提醒消失即成功</text>
        </text>
        <view style="margin-top: 20upx;">
          由于学生方案是包月，非包年，所以成功前后【<text style="color:red">续期日期不改变</text>】
        </view>
        <img src="https://article.biliimg.com/bfs/article/7b874bde1ce69b4096656e2668f6d348fd06f3aa.png" />
      </u-collapse-item> -->
      <u-collapse-item title="3、优惠期限？">
        <text class="u-collapse-content">
          <viwe style="font-size: 40upx;font-weight: bold;color:red;">12个月。</viwe>
          <view>音乐界面会提前1个月<text style="color:red">弹窗提醒验证</text>，每12个月过来下单续一年。</view>
          <!-- 苹果1-4年会抽查资格（音乐界面会提前一个月<text style="color:red">提醒验证</text>）
          如果抽到需<text style="color:red">重新下单</text>续，人工和激活链均需成本！ -->
        </text>
      </u-collapse-item>
    </u-collapse>
    <!-- 底部按钮 -->
    <view class="btn">
      <u-checkbox-group style="position: absolute;right: 0; bottom: 100upx;" v-model="checkboxValue1" placement="column"
        @change="checkboxChange">
        <u-checkbox class="animate__animated animate__shakeX" v-show="showAlert" labelSize="18" size="25"
          label="我已认真阅读，可以开始验证" :name="true">
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
          src="https://article.biliimg.com/bfs/article/dadb946a05f07ddb66f1469bd7395e27a4af165c.png"
          style="height: 720rpx;display:block;margin:0 auto;border: 2px solid #ff4c4c;border-radius: 10px;" />
        <view style="font-size: 30upx;">
          如未成功，<view style="color:red;font-weight: bolder;font-size: 60upx;display: inline-block;"
            class="animate__animated animate__shakeY animate__infinite">必须</view>点开【系统设置头像订阅Apple Music】截图客服
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
        uni.$u.http.post('/pms/am/c/startVerify', {}, {
          params: {
            code: this.code
          }
        }).then(res => {
          if (res?.success && res?.result != null) {
            if (this.verifyAddr == null) {
              // safari不支持base64打开
              // this.verifyAddr = window.btoa(decodeURIComponent(uni.$u.decrypt(res.result, true)))
              this.verifyAddr = decodeURIComponent(uni.$u.decrypt(res.result, true))
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

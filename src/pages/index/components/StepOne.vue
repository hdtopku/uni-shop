<template>
  <view class="container">
    <u-divider text="订阅中才可升级、续期"></u-divider>
    <u-radio-group v-model="radiovalue7" :borderBottom="true" placement="column" iconPlacement="right"
      @change="groupChange">
      <u-radio :customStyle="{marginBottom: '8px'}" v-for="(item, index) in radiolist7" :key="index" :label="item.label"
        :name="item.name">
      </u-radio>
    </u-radio-group>
    <view class="btn">
      <u-alert style="position: absolute; bottom: 120upx;width: 100%;" v-show="showAlert"
        class="animate__animated animate__shakeX" :title="alertTitle" :type="alertType" :effect="alertEffect">
      </u-alert>
      <u-button @click="clickNext" type="error" plain shape="circle">{{buttonText}}
      </u-button>
    </view>
    <u-modal showCancelButton :closeOnClickOverlay="true" :show="showRenewModal1" cancelText="继续！提醒消失即成功"
      @close="showRenewModal1 = false" @cancel="confirmNext" cancelColor="red" confirmText="懵了！我再看看" confirmColor="blue"
      @confirm="showRenewModal1 = false">
      <img referrer="no-referrer|origin|unsafe-url" class="animate__animated animate__flipInX"
        src="https://article.biliimg.com/bfs/article/7b874bde1ce69b4096656e2668f6d348fd06f3aa.png"
        style="width: 600rpx;height: 600rpx;" />
    </u-modal>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        showAlert: true,
        alertType: 'error',
        alertTitle: `👆 请正确选择您的情况！`,
        alertEffect: 'light',
        radiolist7: [{
            label: '情况1、我尚未订阅：过期用户、或新用户',
            name: 1,
            disabled: false
          },
          {
            label: '情况2、我在订阅中：个人方案、或学生续期',
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
      groupChange(n) {
        switch (n) {
          case 1:
            this.alertType = 'error'
            this.alertTitle = `先开后升
            
            情况1.1：过期用户步骤
            1、先花10元开个人方案，10元苹果收，不可退！
            2、开完后，再选择情况2升级
            
            情况1.2：新用户步骤
            1、先免费开通个人方案，若试用过无免费，按情况1.1
            2、开完后，再选择情况2升级`
            this.alertEffect = 'light'
            this.buttonText = '先到音乐里开通个人方案，再升学生方案'
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
      clickNext() {
        uni.$u.reportIp()
        if (this.radiovalue7 < 2) {
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

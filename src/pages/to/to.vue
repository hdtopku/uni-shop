<template>
  <view v-if="showPage" style="width: 100vw;height: 100vh;padding: 800upx 50upx 0">
    <u-button class="animate__animated animate__pulse animate__infinite" type="error" size="large" @click="jump"
      style="z-index: 1;">去淘宝小程序提货
    </u-button>
    <!-- <iframe style="width: 100vw;height: 100vh;" :src="link"></iframe> -->
    <u-alert fontSize="20" style="position: absolute;right: 50upx;margin-top: 20upx;" description="下单后，再提货"
      type="success"></u-alert>

  </view>
</template>

<script>
  export default {
    data() {
      return {
        code: null,
        link: '',
        showPage: false,
      }
    },
    onLoad() {
      let info = uni.$u.getInfo()
      if (info?.sys?.model?.toUpperCase() === 'PC') {
        uni.$u.removePage()
        this.openInMobile()
        return
      }
      if (this.getCode() != null) {
        uni.$u.http.post('/pms/shortLink/c/query/' + this.code).then(res => {
          if (res.success) {
            this.showPage = true
            this.link = decodeURIComponent(uni.$u.decrypt(res.result, true))
          } else {
            uni.$u.removePage()
          }
        })
      }
    },
    methods: {
      jump() {
        location.href = this.link
      },
      getCode() {
        let code = this.$Route?.query?.code
        this.code = code
        return code
      },
      openInMobile() {
        let h1 = document.createElement('p')
        h1.innerHTML = `<div><b style='color:red;font-size:30px;'>请在手机端打开</b></div>
        <textarea id="text" style="position: fixed;top: 10000px;left: 10000px;opacity: 0;"></textarea>
        <button id="CopyBtn" style="padding:10px;font-size:18px;">点我复制页面链接，并前往手机提货</button>
            `
        h1.style = 'padding:250px 20px'
        document.body.appendChild(h1)
        var CopyBtn = document.getElementById("CopyBtn");
        CopyBtn.onclick = function() {
          // 将需要复制的内容赋值给文本框
          text.value = location.href;
          // 选中文本框的内容
          text.select();
          // 对选中的内容进行复制
          document.execCommand("copy");
          window.alert(`验证链接已复制`)
        }
      }

    }
  }
</script>

<style>

</style>

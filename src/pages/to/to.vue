<template>
  <view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        code: null
      }
    },
    onLoad() {
      uni.$u.removePage()
      let info = uni.$u.getInfo()
      if (info?.sys?.model?.toUpperCase() === 'PC') {
        this.openInMobile()
        return
      }
      if (this.getCode() != null) {
        uni.$u.http.post('/pms/shortLink/c/query/' + this.code).then(res => {
          let link = decodeURIComponent(uni.$u.decrypt(res.result, true))
          // location.href = link
        })
      }
    },
    methods: {
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

<template>
  <view>
    1
    <web-view :webview-styles="webviewStyles" :src="src"></web-view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        src: 'https://baidu.com',
        webviewStyles: {
          progress: {
            color: '#FF3333'
          }
        }
      }
    },
    onReady() {
      // window.open("https://baidu.com", "_blank")
      // parent.location.href = "https://tb.j5k6.com/ddp5b"
      // parent.location.href = "https://baidu.com"
      // window.top.location = "https://baidu.com"
      // var currentWebview = this.$scope.$getAppWebview()
      // setTimeout(function() {
      //   let wv = currentWebview.children()[0]
      //   wv.setStyle({
      //     top: 220,
      //     height: 300
      //   })
      // }, 1000);
    },
    methods: {}
  }
</script>

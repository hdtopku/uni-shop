<template>
  <view>
    <u-gap height="300"></u-gap>
    <u-button @click="openLink" size="large" :type="isLink(link) ? 'primary' : 'info'">去下载</u-button>
    <u-gap></u-gap>
    <u--input clearable border="surround" v-model="link"></u--input>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        link: '',
        websock: null,
      }
    },
    onReady() {
      uni.$on('preDownload', this.preDownload)
      // this.initWebSocket()
      // uni.connectSocket({
      //   url: 'ws://localhost:3100/websocket',
      //   data() {
      //     return {
      //       x: '',
      //       y: ''
      //     };
      //   },
      //   header: {
      //     'content-type': 'application/json'
      //   },
      //   protocols: ['protocol1'],
      //   method: 'GET'
      // });
      // uni.onSocketOpen(function(res) {
      //   console.log('WebSocket连接已打开！');
      // });
    },
    destroyed: function() { // 离开页面生命周期函数
      // this.websocketclose();
    },
    methods: {
      preDownload() {
        uni.$u.http.post('/c/w/g').then(res => {
          let link = res.message
          if (this.isLink(link)) {
            this.link = link
          }
        })
      },
      isLink(link) {
        const reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
        const r = link?.trim().match(reg);
        return r != null;
      },
      openLink() {
        if (this.isLink(this.link)) {
          let link = this.link
          this.link = ''
          window.open(link)
        } else {
          this.preDownload()
        }
      },
      initWebSocket: function() {
        // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
        var userId = 'test';
        var url = "ws://localhost:9000/jeecgboot/websocket/" + userId;
        this.websock = new WebSocket(url);
        this.websock.onopen = this.websocketonopen;
        this.websock.onerror = this.websocketonerror;
        this.websock.onmessage = this.websocketonmessage;
        this.websock.onclose = this.websocketclose;
      },
      websocketonopen: function() {
        console.log("WebSocket连接成功");
      },
      websocketonerror: function(e) {
        console.log("WebSocket连接发生错误");
      },
      websocketonmessage: function(e) {
        var data = eval("(" + e.data + ")");
        //处理订阅信息
        if (data.cmd == "topic") {
          //TODO 系统通知

        } else if (data.cmd == "user") {
          //TODO 用户消息

        }
      },
      websocketclose: function(e) {
        console.log("connection closed (" + e.code + ")");
      }
    }
  }
</script>

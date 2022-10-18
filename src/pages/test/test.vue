<template>
  <view>
    <u-gap height="300"></u-gap>
    <u-button @click="openLink" size="large" :type="isLink() ? 'primary' : 'info'">去下载</u-button>
    <u-gap></u-gap>
    <u--input clearable border="surround" v-model="link"></u--input>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        link: 'https://baidu.com',
      }
    },
    onReady() {
      uni.connectSocket({
        url: 'ws://localhost:8080/websocket',
        data() {
          return {
            x: '',
            y: ''
          };
        },
        header: {
          'content-type': 'application/json'
        },
        protocols: ['protocol1'],
        method: 'GET'
      });
      uni.onSocketOpen(function(res) {
        console.log('WebSocket连接已打开！');
      });
    },
    methods: {
      isLink() {
        const reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
        const r = this.link?.trim().match(reg);
        return r != null;
      },
      openLink() {
        if (this.isLink()) {
          window.open(this.link)
        }
      }
    }
  }
</script>

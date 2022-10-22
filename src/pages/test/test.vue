<template>
  <view>
    <u-gap height="300"></u-gap>
    <u-button @click="openLink" size="large" :type="isLink(link) ? 'primary' : 'info'">去下载</u-button>
    <u-gap></u-gap>
    <u--input clearable border="surround" v-model="link"></u--input>
  </view>
</template>

<script>
  //导入websocket对象
  import socket from '@/a/utils/socket.js'
  export default {
    data() {
      return {
        link: '',
        websock: null,
      }
    },
    onReady() {
      // uni.$on('preDownload', this.preDownload)
      socket.init()
    },
    mounted() {
      const _this = this;
      uni.onSocketMessage((res) => {
        let link = res.data;
        console.log(res.data)
        if (this.isLink(link)) {
          this.link = link
        }
        _this.acceptMessage && _this.acceptMessage(data);
      });
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
    }
  }
</script>

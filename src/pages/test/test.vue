<template>
  <view>
    <u-gap height="300"></u-gap>
    <u-button @click="openLink" size="large" :type="links.length>0 ? 'primary' : 'info'">去下载
      <span v-show="links.length>0">（{{links.length}}条）</span>
    </u-button>
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
        links: [],
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
        if (this.isLink(res.data)) {
          this.links.push(res.data)
        }
        _this.acceptMessage && _this.acceptMessage(data);
      });
    },
    methods: {
      preDownload() {
        uni.$u.http.post('/c/w/g').then(res => {
          if (this.isLink(res.message)) {
            this.links.push(res.message)
          }
        })
      },
      isLink(link) {
        const reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
        const r = link?.trim().match(reg);
        return r != null;
      },
      openLink() {
        if (this.links?.length > 0) {
          window.open(this.links?.shift())
        } else {
          this.preDownload()
        }
      },
    }
  }
</script>

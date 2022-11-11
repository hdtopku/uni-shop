<template>
  <view>
    <u-gap height="200"></u-gap>
    <u-button @click="$u.debounce(openLink, 500, true)" size="large" :type="links.length>0 ? 'primary' : 'info'">去下载
      <span v-show="links.length>0">（{{links.length}}条）</span>
    </u-button>
    <u-gap></u-gap>
    <!-- <u--input clearable border="surround" v-model="link"></u--input> -->
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
      this.preDownload()
      uni.$on('preDownload', this.preDownload)
      socket.init()
    },
    mounted() {
      const _this = this;
      uni.onSocketMessage((res) => {
        this.dealResult(uni.$u.decrypt(res?.data, true))
      });
    },
    methods: {
      preDownload() {
        if (this.links?.length < 1) {
          uni.$u.http.post('/c/w/g').then(res => {
            if (res?.success) {
              let links = JSON.parse(decodeURIComponent(uni.$u.decrypt(res?.result, true)))
              if (links?.length > 0) {
                links.forEach(link => {
                  this.dealResult(link)
                })
              }
            }
          })
        }
      },
      dealResult(data) {
        if (data != null) {
          let link = decodeURIComponent(data)
          if (this.isLink(link) && this.links.indexOf(link) < 0) {
            this.links.push(link)
          }
        }
      },
      isLink(link) {
        const reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
        const r = link?.trim().match(reg);
        return r != null;
      },
      openLink() {
        if (this.links?.length > 0) {
          window.open('javascript:window.name;', '<script>location.replace("' + this.links?.shift() + '")<\/script>');
          // window.open(this.links?.shift())
        } else {
          this.preDownload()
        }
      },
    }
  }
</script>

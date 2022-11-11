<script>
  import socket from '@/a/utils/socket'
  export default {
    onLaunch: function() {
      uni.$on('addInvalidCode', this.addInvalidCode)
    },
    onShow: function() {
      uni.$emit('startVerify')
      uni.$emit('startQuery', {}, true)
      uni.$emit('preDownload')
    },
    onHide: function() {},
    destroyed: function() { // 离开页面生命周期函数
      socket.closeSocket()
    },
    methods: {
      addInvalidCode(code) {
        let codes = uni.$u.getCache('cs1') ?? []
        uni.$u.removePage()
        if (code != null && !codes.includes(code)) {
          codes.push(code)
          uni.$u.setCache('cs1', codes, 3600 * 24 * 30)
        }
      },
    }
  }
</script>

<style lang="scss">
  /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
  @import "@/uview-ui/index.scss";
  @import '@/a/static/css/iconfont.css';
  @import '@/a/static/css/common.css';
  @import '@/a/static/css/common.scss';
  @import '@/a/static/css/animate.css'; // :root需改为page以兼容微信小程序
  @import '@/ui/scss/ui';

  page {
    background-color: white;
    height: 100vh;
  }
</style>

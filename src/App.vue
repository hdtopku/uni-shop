<script>
  export default {
    onLaunch: function() {},
    onShow: function() {},
    onHide: function() {}
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

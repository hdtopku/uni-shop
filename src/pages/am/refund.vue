<template>
  <view style="font-size: 50upx; padding: 500upx 50upx 0;">
    <u-alert fontSize="25" show-icon :title="title" type="success"></u-alert>
    <u-divider textSize="20" text='相逢即缘，好聚好散！'></u-divider>
    接下来，请前往订单处申请退款，<text style="color:red">退款原因：其他/协商一致</text>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: '退款已发起',
      }
    },
  }
</script>

<style>
</style>

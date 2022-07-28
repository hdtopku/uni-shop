<template>
  <view class="container">
    <u-row justify="center" gutter="20">
      <u-col span="18">
        <u-button type="primary" class="shadow animate__animated animate__pulse animate__slow animate__infinite">
          一键复制账密
        </u-button>
      </u-col>
      <u-col span="6">
        <u-button type="error" class="shadow">教程</u-button>
      </u-col>
    </u-row>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style>
  .container {
    height: 100vh;
    padding: 20upx;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

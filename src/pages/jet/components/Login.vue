<template>
  <view>
    <u-gap></u-gap>
    <u-alert title="标识提示：" description="145****30@qq.com" type="error"></u-alert>
    <u-gap></u-gap>
    <u--input clearable placeholder="请完整输入标识" border="surround" v-model="identity">
    </u--input>
    <u-gap></u-gap>
    <u-button type="primary" @click="testPass">输入并提取</u-button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        identity: ""
      }
    },
    methods: {
      testPass() {

      }
    }
  }
</script>

<style>
</style>

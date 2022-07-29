<template>
  <view class="p-3">
    <u-gap></u-gap>
    <u-divider>绑定标识，自助售后</u-divider>
    <u-alert :title="alertTitle" type="error"></u-alert>
    <u-gap></u-gap>
    <u--input clearable placeholder="推荐输入qq号/邮箱/手机等" border="surround" v-model="value" @change="change">
    </u--input>
    <u-gap></u-gap>
    <u-button type="primary">注册</u-button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        alertTitle: `放心输入任意你能记住的标识
        
        1、标识用于自助售后，你必须记住（可以是qq号/邮箱/手机等）
        2、至少8位、仅限字母、数字，不包含特殊字符`
      }
    }
  }
</script>

<style>
</style>

<template>
  <view class="p-3">
    <u-gap></u-gap>
    <u-divider text="绑定标识，自助售后"></u-divider>
    <u-alert :title="alertTitle" type="error"></u-alert>
    <u-gap></u-gap>
    <u--input clearable placeholder="输入标识，推荐输入qq号/邮箱/手机等" border="surround" v-model="identity" @change="change">
    </u--input>
    <u-gap></u-gap>
    <u-button type="primary" @click="testPass">绑定标识，自助提取</u-button>
    <u-modal closeOnClickOverlay showCancelButton :show="showModal" :title="title" :content='content'
      @close="closeModal" @cancel="showModal = false" @confirm="confirm"></u-modal>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        identity: 'identity',
        alertTitle: `放心输入任意你能记住的标识
        
        1、标识用于自助售后，你必须记住（可以是qq号/邮箱/手机等）
        2、至少8位、仅限字母、数字，不包含特殊字符`,
        showModal: true,
        title: '是否确定绑定',
        content: '自助售后',
      }
    },
    watch: {
      identity() {
        this.testPass()
      }
    },
    methods: {
      testPass() {
        var pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?\(\)]).{6,16}$/
        let res = pattern.test(this.identity)
        console.log(res)
        this.showModal = true
      },
      closeModal() {
        this.showModal = false
      },
      confirm() {
        this.showModal = false

      }
    }
  }
</script>

<style>
</style>

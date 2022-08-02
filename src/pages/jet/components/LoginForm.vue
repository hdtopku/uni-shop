<template>
  <view>
    <u-alert :title="alertTitle" type="error"></u-alert>
    <u--input clearable placeholder="请输入标识" border="surround" v-model="identity" @change="change">
    </u--input>
    <u-gap></u-gap>
    <u-row justify="center" gutter="2">
      <u-col span="4">
        <u-checkbox-group v-model="checkboxValue1" placement="column" @change="checkboxChange">
          <u-checkbox v-show="showAlert" class="animate__animated animate__shakeX" labelSize="18" size="25" label="确认无误"
            :name="true">
          </u-checkbox>
        </u-checkbox-group>
      </u-col>
      <u-col span="6">
        <u-button @click="submit" type="primary">提交</u-button>
      </u-col>
    </u-row>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        identity: '1450948930@qq.com',
        checkboxValue1: [false],
        showAlert: true,

        alertTitle: `放心输入任意你能记住的标识
        
        1、标识用于自助售后，你必须记住（可以是qq号/邮箱/手机等）
        2、至少8位、仅限字母、数字，不包含特殊字符`,
      }
    },
    methods: {
      submit() {
        if (this.checkboxValue1[0]) {

        } else {

          this.showAlert = false
          setTimeout(() => {
            this.showAlert = true
          }, 1)
        }
      },
      checkboxChange() {},
      change() {

      }
    }
  }
</script>

<style>
</style>

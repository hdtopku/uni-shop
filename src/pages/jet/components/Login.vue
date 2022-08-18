<template>
  <view>
    <u-gap></u-gap>
    <u-divider text="输入标识，自助提取"></u-divider>
    <u-alert title="标识提示：" :description="tip" type="error"></u-alert>
    <u-gap></u-gap>
    <u--input clearable placeholder="请完整输入标识" border="surround" v-model="identity">
    </u--input>
    <u-gap></u-gap>
    <u-button type="primary" @click="submit">输入并提取</u-button>
  </view>
</template>

<script>
  export default {
    props: {
      tip: null,
      code: null
    },
    data() {
      return {
        identity: ""
      }
    },
    methods: {
      testPass() {

      },
      submit() {
        uni.$u.http.post('/pms/c/id/g/' + this.code, {}, {
          params: {
            code: this.code,
            identity: this.identity
          }
        }).then(res => {
          if (res != null) {
            this.tip = res.result
          }
          console.log(res)
        })
      }
    }
  }
</script>

<style>
</style>

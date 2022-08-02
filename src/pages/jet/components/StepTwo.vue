<template>
  <view class="container">
    <u-row justify="center" gutter="20">
      <u-col span="18">
        <u-button type="primary" class="shadow animate__animated animate__pulse animate__slow animate__infinite">
          一键复制账密
        </u-button>
      </u-col>
    </u-row>
    <u-gap></u-gap>
    <u-collapse accordion @change="change" @close="close" @open="open">
      <u-collapse-item title="高级" name="Docs guide">
        <u--input clearable placeholder="请输入新的标识" border="surround" v-model="identity" @change="change">
          <u-button slot="suffix" type="primary">修改标识</u-button>
        </u--input>
        <u-gap></u-gap>
      </u-collapse-item>
    </u-collapse>
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      open(e) {
        // console.log('open', e)
      },
      close(e) {
        // console.log('close', e)
      },
      change(e) {
        // console.log('change', e)
      }
    }
  }
</script>

<style>
  .container {
    height: 100vh;
    padding: 20upx;
  }
</style>

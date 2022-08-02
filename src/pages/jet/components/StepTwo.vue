<template>
  <view class="container">
    <u-row justify="space-between">
      <u-col span="18">
        <u-button type="primary" class="shadow animate__animated animate__pulse animate__slow animate__infinite">
          一键复制账密
        </u-button>
      </u-col>
    </u-row>
    <u-gap></u-gap>
    <u-collapse accordion @change="change" @close="close" @open="open">
      <u-collapse-item title="高级" name="Docs guide">
        <LoginForm></LoginForm>
      </u-collapse-item>
    </u-collapse>
  </view>
</template>

<script>
  import LoginForm from './LoginForm.vue'
  export default {
    components: {
      LoginForm
    },
    data() {
      return {
        identity: '1450948930@qq.com',
        checkboxValue1: [true]
      }
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

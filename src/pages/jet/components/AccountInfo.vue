<template>
  <view class="">
    <u-gap height="200"></u-gap>
    <u-row justify="space-between" gutter="20">
      <u-col span="4">
        <u-button @click="jumpTo" type="error" plain class="shadow-sm">教程</u-button>
      </u-col>
      <u-col span='8'>
        <u-button type="primary" class="shadow animate__animated animate__pulse animate__slow animate__infinite"
          @click="copy">
          一键复制账密
        </u-button>
      </u-col>
    </u-row>
    <u-gap></u-gap>
    <u-collapse accordion @change="change" @close="close" @open="open">
      <u-collapse-item title="高级" name="Docs guide">
        <u-button type="error" @click="refetch">重新获取</u-button>
        <u-divider text="修改标识"></u-divider>
        <RegisterForm isUpdate :code="code"></RegisterForm>
      </u-collapse-item>
    </u-collapse>
  </view>
</template>

<script>
  import RegisterForm from './RegisterForm.vue'
  export default {
    components: {
      RegisterForm
    },
    props: {
      code: '',
      account: null,
      password: null
    },
    data() {
      return {
        identity: '',
        checkboxValue1: [true]
      }
    },
    methods: {
      copy() {
        uni.setClipboardData({
          data: `${this.account}，${this.password}`
        })
      },
      refetch() {
        uni.$u.delCache('i')
        uni.$emit('startQuery')
      },
      jumpTo() {
        window.open("https://www.yuque.com/docs/share/cef44c5f-cb62-4e96-ae03-95e47422a375")
      },
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

<template>
  <view class="">
    <u-alert style="position: absolute;" title="若希望激活自己的邮箱:" type="warning" :description="description1">
    </u-alert>
    <u-link style="cursor:pointer;position: absolute;right: 100upx;top: 250upx;"
      href="https://h5.m.taobao.com/awp/core/detail.htm?id=687752813957" text="点击咨询淘宝客服" @click="click">
    </u-link>
    <u-gap height="120"></u-gap>
    <u-alert title="特别说明:" type="error" :description="description"></u-alert>
    <u-gap height="10"></u-gap>
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
      <u-collapse-item title="获取最新账密、修改提取密码" name="Docs guide">
        <u-divider text="若账密失效,点下方重新获取最新"></u-divider>
        <u-gap height="10"></u-gap>
        <u-button type="error" @click="refetch">重新获取</u-button>
        <u-divider text="修改提取密码"></u-divider>
        <RegisterForm isUpdate :code="code"></RegisterForm>
      </u-collapse-item>
    </u-collapse>
    <u-gap></u-gap>
    <img style="display: block;width: 400upx;margin: 0 auto;"
      src="https://article.biliimg.com/bfs/article/ca8a5f9c470607308255ec73dfcc8640d8f65ede.png"></img>
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
        checkboxValue1: [true],
        description: `篡改jet密码，将永久拉黑，终身停止售后！勿自私！
        若希望更稳定，可补差价买上面的，激活自己邮箱`,
        description1: `以获得稳定的体验，可根据购买时间补差价升级，咨询qq或微信:1450948930，或`
      }
    },
    methods: {
      copy() {
        uni.setClipboardData({
          data: `账【${this.account}】
密【${this.password}】`
        })
        setTimeout(() => {
          uni.$emit('showNotify', '收藏此链接，若账密失效，自助获取最新，无需找客服', {
            duration: 10000
          })
        }, 300)
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
</style>

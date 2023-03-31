<template>
  <view class="">
    <!-- <u-alert style="position: absolute;" title="若希望激活自己的邮箱:" type="warning" :description="description1">
    </u-alert> -->
    <u-link style="cursor:pointer;position: absolute;right: 100upx;top: 250upx;"
      href="https://item.taobao.com/item.htm?id=692734405373" text="🚀 点击咨询客服，升级为稳定定制版 >" @click="click">
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
    <img referrer="no-referrer|origin|unsafe-url" v-if="showCode" style="display: block;width: 400upx;margin: 0 auto;"
      src="https://article.biliimg.com/bfs/article/82a132435a7fa60ec58192bfd869124befa14985.png"></img>
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
    created() {
      uni.$on('showWxCode', (show) => {
        this.showCode = show
      })
      uni.$emit('ifShowWxCode')
    },
    data() {
      return {
        identity: '',
        checkboxValue1: [true],
        description: `篡改jet密码，将永久拉黑，终身停止售后！勿自私！
        若希望更稳定，可补差价买上面的，激活自己邮箱`,
        description1: `以获得稳定的体验，可根据购买时间补差价升级，`,
        showCode: false,
      }
    },
    methods: {
      copy() {
        uni.setClipboardData({
          data: `账【${this.account}】
密【${this.password}】`
        })
        setTimeout(() => {
          uni.$emit('showNotify', `👉 到软件里，选JBAccount登录，遇到问题先看教程
           👉收藏此链接，若账密失效，自助获取最新，无需找客服
          `, {
            duration: 15000
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

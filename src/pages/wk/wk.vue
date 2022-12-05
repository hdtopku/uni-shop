<template>
  <Page1 v-if="showPage" class="p-4">
    <u-gap height="280"></u-gap>
    <u--textarea placeholder="请输入文档连接，以http或https开头，例如：https://wenku.baidu.com/xxx" border="surround" v-model="link">
    </u--textarea>
    <u-gap></u-gap>
    <u--input placeholder="请输入接收的邮箱" border="surround" clearable v-model="email"></u--input>
    <u-gap></u-gap>
    <u-button @click="submit" type="primary">发到邮箱</u-button>
  </Page1>
</template>

<script>
  import Page1 from '../../a/components/page1.vue'
  import {
    extractUrl
  } from '../../a/utils/urlUtil.js'
  export default {
    components: {
      Page1
    },
    data() {
      return {
        showPage: true,
        link: '',
        email: '1450948930@qq.com',
        code: '',
      }
    },
    onLoad(option) {
      this.getCode()
    },
    methods: {
      getCode() {
        this.code = this.$Route?.query?.code
      },
      submit() {
        let link = extractUrl(this.link.trim())
        if (null == link || link.trim().length < 1 || link.indexOf('wenku.baidu.com') < 0) {
          uni.$emit('showNotify', '请输入文档地址')
          return
        }
        let params = {
          email: this.email,
          link
        }
        uni.$u.http.post('/c/w/s/' + this.code, {}, {
            params
          })
          .then(res => {
            uni.$emit('showNotify',
              '提交成功', {
                bgColor: '#34bf49'
              })
          })
      }
    }
  }
</script>

<style lang="scss">
  .page {
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
  }
</style>

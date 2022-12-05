<template>
  <view>
    <u-alert :title="alertTitle" type="error"></u-alert>
    <u-gap></u-gap>
    <u--input clearable placeholder="推荐输入qq号/邮箱/手机等" border="surround" v-model="identity"
      @confirm="$u.debounce(submit, 50, true)">
    </u--input>
    <u-gap></u-gap>
    <u-row justify="center" gutter="2">
      <u-col span="4">
        <u-checkbox-group v-model="checkboxValue1" placement="column">
          <u-checkbox v-show="showAlert" class="animate__animated animate__shakeX" labelSize="18" size="25" label="确认无误"
            :name="true">
          </u-checkbox>
        </u-checkbox-group>
      </u-col>
      <u-col span="6">
        <u-button @click="$u.debounce(submit, 50, true)" type="primary">{{buttonName}}</u-button>
      </u-col>
    </u-row>
  </view>
</template>

<script>
  export default {
    props: {
      code: null,
      isUpdate: false,
      buttonName: {
        type: String,
        default: '提交'
      }
    },
    data() {
      return {
        identity: '',
        old: '',
        checkboxValue1: [false],
        showAlert: true,
        alertTitle: `1、设置提取密码：8-24位，以便自助提取
        2、推荐输入qq号/邮箱/手机等，以便记忆`,
      }
    },
    created() {
      if (this.isUpdate) {
        let accounts = uni.$u.getCache('i') ?? {}
        let account = accounts[this.code]
        if (account?.identity != null) {
          this.identity = account.identity
          this.old = this.identity
        }
      }
    },
    methods: {
      submit() {
        this.identity = this.identity?.trim()
        if (this.identity?.length < 8) {
          uni.$emit('showNotify', '密码太短了')
          return
        }
        if (this.identity?.trim()?.length > 24) {
          uni.$emit('showNotify', '密码太长了')
          return
        }
        let params = {
          identity: this.identity,
          code: this.code
        }
        if (this.isUpdate) {
          params.old = this.old
        }
        if (this.checkboxValue1[0]) {
          uni.$u.http.post('/c/id/b', {}, {
            params: {
              i: uni.$u.encrypt(params, true)
            }
          }).then(res => {
            uni.$u.delCache('i')
            uni.$emit('startQuery')
          })
        } else {
          this.showAlert = false
          setTimeout(() => {
            this.showAlert = true
          }, 1)
        }
      }
    }
  }
</script>

<style>
</style>

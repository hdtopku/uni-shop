<template>
  <view class="p-3">
    <u-gap></u-gap>
    <u-divider text="绑定标识，自助提取"></u-divider>
    <LoginForm :code="code"></LoginForm>
  </view>
</template>

<script>
  import LoginForm from './LoginForm.vue'
  export default {
    components: {
      LoginForm
    },
    props: {
      code: null
    },
    data() {
      return {}
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

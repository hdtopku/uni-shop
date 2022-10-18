<template>
  <view class="p-3">
    <u-gap></u-gap>
    <u-divider text="设置密码，自助提取" textSize="18"></u-divider>
    <RegisterForm buttonName="设置并提取" :code="code"></RegisterForm>
  </view>
</template>

<script>
  import RegisterForm from './RegisterForm.vue'
  export default {
    components: {
      RegisterForm
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

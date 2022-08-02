<template>
  <view>
    <StepOne></StepOne>
    <!-- <StepTwo></StepTwo> -->
    <!-- <Login></Login> -->
  </view>
</template>

<script>
  import StepOne from './components/StepOne.vue'
  import StepTwo from './components/StepTwo.vue'
  import Login from './components/Login.vue'
  export default {
    components: {
      StepOne,
      StepTwo,
      Login
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style>

</style>

<template>
  <view class="share">
    <!-- <ui-input laceholder="一键粘贴视频链接" maxlength="1000" type="textarea" autoheight showtag>
    </ui-input> -->
    <u-field class="input" style="padding: 20upx 60upx 20upx 80upx;" type="textarea" v-model="value"
      input-align="center" placeholder="一键粘贴视频链接" border clear-size="80" label-width="0" label-align="left"
      :border-bottom="false" maxlength="-1">
    </u-field>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
      }
    },
    methods: {
      setClipboard() {
        uni.getClipboardData({
          success: (res) => {
            this.value = res.data
            let url = this.$u.getPlatformUrl(res.data)
          }
        })
      }
    },
    created() {
      uni.$on('clipboard', this.setClipboard)
    }
  }
</script>

<style scoped lang="scss">
  .share {
    background-color: #caccd1;
    color: white;
  }
</style>

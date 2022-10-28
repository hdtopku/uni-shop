<template>
  <view class="">
    <img referrer="no-referrer|origin|unsafe-url" class="animate__animated animate__flipInX"
      src="https://article.biliimg.com/bfs/article/11bae270f1ae0184b246147011155450b71e04ae.jpg"
      style="width: 100%;display:block;margin:0 auto;border: 2px solid #ff4c4c;border-radius: 10px;" />
    <view style="font-size: 36upx;color:red;font-weight: bolder;display: block;text-align: center;margin-top: 10upx;"
      class="animate__animated animate__bounce animate__repeat-3">
      消失就成功<view style="display: inline-block;" class="animate__animated animate__bounce animate__infinite">👆</view>
      扣费时间不变不显示为明年
    </view>
    <u-gap height="10"></u-gap>
    <!-- <u-alert class=" animate__fadeInRight animate__slower" style="" description="验证前：若有免费先开免费的；若中途取消先免费重开再开始👇"
      type="error"></u-alert> -->
    <div>
      <u-link href="https://www.yuque.com/docs/share/0c0049b7-96d6-4cbb-a82b-1b8d34c38481" underLine
        text="附：差评师、恶意退款（全网禁拍名单）">
      </u-link>
    </div>
    <u-gap height="30"></u-gap>
    <div style="text-align: center;">
      <a color="#ff4c4c" href="javascript:;" @click="showPop=true" underLine text="学生续期，请注意">
        学生续期，必读</a>
    </div>
    <u-gap height="5"></u-gap>
    <!-- 底部按钮 -->
    <u-row class="btn" gutter="10">
      <u-col span="12">
        <button @click="$u.debounce(clickStart, 1200, true)"
          class="ui-btn bg-orange-gradient round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4">
          开始验证（ Start verification ）
        </button>
      </u-col>
    </u-row>
    <u-gap height="5"></u-gap>
    <div style="text-align: center;">
      <div class="borders border-blue p-2 my-2"
        style="font-size: 28upx;color:red;display: inline-block;border-radius: 12px;">
        验证完后：到订阅里勾上学生
      </div>
      <img style="display: inline-block;width: 460upx;"
        src="https://article.biliimg.com/bfs/article/92d7dffc509ae904e536e5c86a8b9dc8fac6f376.png">
    </div>
    <u-popup class="bg-stripes-grey" :round="10" :show="showPop" mode="bottom" @close="closePop" @open="showPop=true"
      closeable>
      <view style="font-size: 35upx;text-align: left;">
        <view class="animate__flipInX p-3 animate__slow">
          <text style="font-size: 30upx;"></text>
          <!-- <ui-tag ui="sm" class="animate animate__heartBeat animate__slower animate__infinite p-4" bg="bg-red-gradient"
            info="验证完后" /> -->
          <u-gap height="5"></u-gap>
          <div class="borders border-blue p-2 my-2"
            style="font-size: 32upx;color:red;border-radius: 12px;text-align:center">
            验证完后，订阅页面提醒不消失怎么办？
          </div>
          <div>1、由于学生身份不能重叠</div>
          <div>
            2、【音乐界面弹窗提醒验证】时，点【我已不是大学生】（新的资格才能刷上去）
          </div>
          <div>
            3、点完就成功了，如果点完还没成功，可以随时找我
          </div>
          <view>4、弹窗不定时，等着就行，或重装音乐试试👇
          </view>

          <u-gap></u-gap>
          <u-row style="margin-left: -20upx;">
            <u-col :span="6">
              <img style="display: inline-block;width:320upx"
                src="https://article.biliimg.com/bfs/article/6657f2eea811289bc3db0835acf78b3d4e358a2b.jpg">
            </u-col>
            <u-col :span="6">
              <img class="animate__animated animate__pulse animate__infinite"
                style="display: inline-block;inline-block;width:320upx"
                src="https://article.biliimg.com/bfs/article/0a86ce629469e2aa669525bd03ef0956ab498275.jpg">
            </u-col>
          </u-row>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
  export default {
    props: {
      code: null
    },
    data() {
      return {
        verifyAddr: null,
        showAlert: true,
        showPop: false,
        checkboxValue1: [false],
      }
    },
    created() {
      this.startVerify()
      uni.$on('startVerify', () => {
        if (this.verifyAddr != null) {
          this.startVerify()
        }
      })
    },
    methods: {
      clickNext() {
        uni.$emit('nextStep')
      },
      checkboxChange(val) {
        uni.$u.saveAsyncInfo()
      },
      closePop() {
        this.showPop = false
        this.checkboxValue1 = [false]
      },
      clickStart() {
        this.jumpStart()
      },
      confirmStart() {
        if (!this.checkboxValue1[0]) {
          uni.$emit('showNotify', '开始前，请勾选：刷脸不扣钱')
        } else {
          this.jumpStart()
        }
      },
      jumpStart() {
        if (this.verifyAddr != null) {
          window.open(this.verifyAddr) // 以下代码取消referrer追踪
          // window.open('javascript:window.name;', '<script>location.replace("' + this.verifyAddr + '")<\/script>');
        }
        this.startVerify(1)
      },
      subscribePersonal() {
        window.open('musics://music.apple.com/deeplink?app=music&p=subscribe')
        // window.open('javascript:window.name;', '<script>location.replace("musics://music.apple.com/deeplink?app=music&p=subscribe")<\/script>');
      },
      startVerify(count = 0) {
        uni.$u.saveAsyncInfo()
        // const encryptLink =
        //   'YR/5s//2Qh/kI3JxY5kEvDIryLbV1RVbD3ZuX7YPM/qyNvbufJ56yf6RlJUjTamP2jRb7JLno/pwDPwlxhqEnVwnVOwViut3Bny8eBNuxMos3FmwD3oZVVsbTexLb4KfZPoZLAU6afn1jVXi6vv289Ptwh7uQs4qSAntM2Ssb8qWNwmTLUSrK/MKQTXex4RPtz99P+SitaZ0uyaBCwQwDYauIeWn/xtixCg4Bhd1ndM+gTdtLhG4oQdK0GwQkjTTseRevxdfNOhOwlrJfTjqd5+Fqn1Yr+iSgXU0ksAUu9utZ2liNO53ExwISG17NRMJTXMwJfGNNui52rfErDdHpA=='
        const encryptLink =
          'rmu0LIHZySVlisDqKkHVM2jPl4w69yOCwfptFigjgVoyBopFDwBs3VNdMZWNlHJiXT8ebmjQYb5l47KBfI++WogMKC61R6czYCj5stxizFMkn4rtuzTV+Ue8385RM1E+aLjSu0sWx9mGmb5C7a8E8imh2kNlU7a6PK1cG7z7bLAVMdkZbuoR8G6fSoPj6q5Ma+nAAx/EbbmHD8NiATKaQf4VxuR1IJ6hOGIfkYBUfBcAxsFQhte9hT0oweqP5vtLyxB4/66sXrkfxdXKc5O3GaAVvWBXopomCauwKUXMbQDpjQmxKyu4XtZvEctH8c06Rqmozyf67xPkWXqKuEaRFg=='
        // https://itunes.apple.com/studentSubscriptionOffers?app=music&ud_h=pB4R%2fJszfs9lHd2YOsB%2fzkdbV7Ad2RX55iocRuhSb4IaRQlDswjigh86SepTj4Zz0lLRfnrD%2fzipIHh5l8litQ%3d%3d&ud_s=%2b43mL%2fEea0GUUsAelq%2f8rw%3d%3d&ud_t=1664092482
        // const encryptLink =
        //   'IRofXhvJk9dJ+i5iLyBecmQu1RORtlgCoI+V6lvyqS5Zw+LbZ36ieUQQYz88ok8nVQk2YoSqAxZ7NmIeY5+h/ljOTVniWZRw3qluZsGW+fshLhhjz5aHkijvth+NSuJm7QGCt2tVPPT4ZngX3eKJb30QaUrKEZySnh5SgbF6N4USVeipeUMoSfToIoHtgFpTEC+yTbQiwYVimqPdIKPOwquT2OiVociJVPnNb3Qu48/QJHuWIHECp4y1a998x8zBJ5NRu6Er8C3aie5OBFTKOnRyZCThHCzZDmaeZM/4v17zsyW7M4f/v0Tb4YZcOkeavNWV9a1cizwxHi6PtpDyIA=='
        let allInfo = uni.$u.getCache('ms')
        let header = {
          i: uni.$u.encrypt({
            ip: allInfo.ip,
            sys: allInfo.sys,
            type: 10,
            code: this.code,
            t: new Date().getTime(),
            extra: count
          }, true)
        }
        uni.$u.http.post('/c/am/s/' + this.code, {}, {
          header
        }).then(res => {
          if (res?.success) {
            if (this.verifyAddr == null && res?.result != null) {
              // safari不支持base64打开
              // this.verifyAddr = window.btoa(decodeURIComponent(uni.$u.decrypt(res.result, true)))
              this.verifyAddr = decodeURIComponent(uni.$u.decrypt(res.result, true))
            }
          } else {
            uni.$emit('addInvalidCode')
            // uni.$u.setCache('cs', [], 60 * 10)
            // uni.$u.setCache('cs1', [], 60 * 10)
            location.reload()
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    height: 950upx;

    .btn {
      // position: absolute;
      width: 100%;
      bottom: 100upx;
      text-align: right;
    }

    img {
      pointer-events: none;
    }
  }
</style>

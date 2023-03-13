<template>
  <view class="">
    <view v-if="isMalai">
      <u-alert title="Cara menilai sama ada ia berjaya" type="danger"
        description="buka sistem dan tetapkan > nama anda > langganan > untuk memasuki langganan muzik, (kelayakan pengesahan) segera hilang, dan RM 8.90 / cangkuk bulan, itu adalah kejayaan.">
      </u-alert>
      <u-gap height="30"></u-gap>
      <!-- 底部按钮 -->
      <u-row class="btn" gutter="10">
        <u-col span="12">
          <button @click="$u.debounce(clickStart, 1200, true)"
            class="ui-btn bg-orange-gradient round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4">
            Mulakan pengesahan
            (Start verification)
          </button>
        </u-col>
      </u-row>
    </view>
    <view v-else>
      <!-- <img referrer="no-referrer|origin|unsafe-url" class="animate__animated animate__flipInX"
      src="https://article.biliimg.com/bfs/article/1f766ea2e70e6248ceff4747c94ed0bd40bc17dd.jpg"
      style="width: 100%;display:block;margin:0 auto;border: 2px solid #ff4c4c;border-radius: 10px;" /> -->
      <!-- <view style="font-size: 36upx;color:red;font-weight: bolder;display: block;text-align: center;margin-top: 10upx;"
      class="animate__animate animate__bounce animate__repeat-3">
      消失就成功<view style="display: inline-block;" class="animate__animated animate__bounce animate__infinite">👆</view>
      扣费时间不变不显示为明年
    </view> -->

      <u-overlay :duration="100" :show="showOverlay" :opacity="1" @click="showOverlay=false">
        <view class="warp">
          <!-- <view class="rect" @tap.stop></view> -->
          <img @click="showMpCode" referrer="no-referrer|origin|unsafe-url" v-if="showCode"
            style="display: block; width: 600upx;margin: 0 auto;"
            src="https://article.biliimg.com/bfs/article/82a132435a7fa60ec58192bfd869124befa14985.png"></img>
        </view>
      </u-overlay>
      <img @click="showMpCode" class="animate__animated animate__swing animate__infinite"
        referrer="no-referrer|origin|unsafe-url" v-if="showCode" style="display: block;width: 120upx;margin: 0 auto;"
        src="https://article.biliimg.com/bfs/article/e3c87054f1fa28534b3872128deda16c66f2c486.png"></img>
      <!-- <img referrer="no-referrer|origin|unsafe-url" v-if="showCode" style="display: block;width: 250upx;margin: 0 auto;"
      src="https://article.biliimg.com/bfs/article/ca8a5f9c470607308255ec73dfcc8640d8f65ede.png"></img> -->
      <u-gap height="15"></u-gap>
      <view style="text-align: center;">
        <a color="#ff4c4c" href="javascript:;" @click="showSuccessPop=true" underLine>【所有用户】必读！！</a>
      </view>
      <u-gap height="15"></u-gap>
      <div style="text-align: center;" class=" animate__delay-2s animate__rubberBand animate__flip animate__repeat-3">
        <a color="#ff4c4c" href="javascript:;" @click="showPop=true" underLine text="学生续期，请注意">
          【续期用户】必读！！</a>
      </div>
      <u-gap height="15"></u-gap>
      <!-- 底部按钮 -->
      <u-row class="btn" gutter="10">
        <u-col span="12">
          <button @click="$u.debounce(clickStart, 1200, true)"
            class="ui-btn bg-orange-gradient round block shadow animate__animated animate__heartBeat animate__slower animate__infinite py-4">
            开始验证（ Start verification ）
          </button>
        </u-col>
      </u-row>
      <u-gap height="15"></u-gap>
      <div style="text-align: center;">
        <img referrer="no-referrer|origin|unsafe-url" style="display: inline-block;width: 500upx;"
          src="https://article.biliimg.com/bfs/article/9f551b5847d473ea5e634ae3d3c79af57608cea0.jpg">
      </div>
      <u-popup class="bg-stripes-grey" :round="10" :show="showPop" mode="bottom" @close="closePop" @open="showPop=true"
        closeable>
        <view style="font-size: 35upx;text-align: left;">
          <view class="animate__flipInX p-3 animate__slow">
            <text style="font-size: 30upx;"></text>
            <u-gap height="5"></u-gap>
            <div class="borders border-blue p-2 my-2"
              style="font-size: 32upx;color:red;border-radius: 12px;text-align:center">
              学生续期：是去年学生优惠，今年续期的用户。
            </div>
            <div style="text-decoration: underline;color:red">由于官方要求：需擦除之前学生身份之后，再验证才能成功。将订阅页面截图，以证明您是续期，客服会补发1条备用
            </div>
            <div>
              1、怎么操作：如下图，【音乐里提醒验证】时，点【我已不是大学生】擦除之前的学生信息之后，再验证才能成功
            </div>
            <view>2、弹窗不定时，只能等着，或重装音乐试试。如果最后几天还没弹出，可以先取消订阅，到期后再验证。
            </view>

            <u-gap></u-gap>
            <img class="animate__animated animate__pulse animate__infinite" referrer="no-referrer|origin|unsafe-url"
              style="display: block;inline-block;width:500upx;margin: 0 auto;"
              src=" https://article.biliimg.com/bfs/article/0a86ce629469e2aa669525bd03ef0956ab498275.jpg">
          </view>
        </view>
      </u-popup>
      <u-popup class="bg-stripes-grey" :round="10" :show="showSuccessPop" mode="bottom" @close="closePop"
        @open="showSuccessPop=true" closeable>
        <view style="font-size: 32upx;text-align: left;">
          <view class="animate__flipInX p-3 animate__slow">
            <text style="font-size: 30upx;"></text>
            <u-gap height="5"></u-gap>
            <u-swiper interval="3500" duration="800" height="350" :list="list" img-mode="scaleToFill"></u-swiper>
            <div>
              <span
                style="text-decoration: underline;color:red">1、是否成功</span>：参考上图，点开手机设置>顶部姓名>订阅>【进入音乐的订阅】：【验证资格】提醒消失，且5元/月勾上，即成功。
              <view></view>
              <div style="text-decoration: ;color:">
                <span
                  style="text-decoration: underline;color:red">2、能用多久</span>：学生验证不改变扣费时间，成功后【扣费日期不显示为明年】，且5元/月自动续1年（不用每个月验证），每年下单续1年
              </div>
              ****请仔细阅读，勿反复问<span style="text-decoration: underline;color:red">是否成功/能用多久</span>****
            </div>
            <u-gap></u-gap>
          </view>
        </view>
      </u-popup>
      <u-gap height="10"></u-gap>
      <div style="float: right;">
        <u-link href="https://www.yuque.com/docs/share/0c0049b7-96d6-4cbb-a82b-1b8d34c38481" underLine color="#000"
          text="附：差评师、恶意退款（全网禁拍名单）咒">
        </u-link>
      </div>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      code: null
    },
    data() {
      return {
        isMalai: false,
        showCode: false,
        showOverlay: false,
        verifyAddr: null,
        showAlert: true,
        showPop: false,
        showSuccessPop: false,
        checkboxValue1: [false],
        list: ['https://article.biliimg.com/bfs/article/39308d28a6dfb737082efbecef19737fccee1160.jpg',
          'https://article.biliimg.com/bfs/article/d58355cda011c2e9cf1a9ab343e693201705b6b9.jpg',
          'https://article.biliimg.com/bfs/article/d82a50ab4e6b2004e28886d7b429d43d2a623356.jpg'
        ]
      }
    },
    created() {
      this.ifMaLai()
      uni.$on('showWxCode', (show) => {
        this.showCode = show
      })
      uni.$emit('ifShowWxCode')
      this.startVerify()
      uni.$on('startVerify', () => {
        if (this.verifyAddr != null) {
          this.startVerify()
        }
      })
    },
    methods: {
      ifMaLai() {
        let allInfo = uni.$u.getCache('ms')
        if (allInfo?.ip?.country?.indexOf('马来西亚') >= 0) {
          this.isMalai = true
        }
      },
      showMpCode() {
        this.showOverlay = !this.showOverlay
      },
      clickNext() {
        uni.$emit('nextStep')
      },
      checkboxChange(val) {
        uni.$u.saveAsyncInfo()
      },
      closePop() {
        this.showPop = false
        this.showSuccessPop = false
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
      // pointer-events: none;
    }
  }

  .warp {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>

// 参考：https://codepen.io/phantom4/pen/mpygyP

// uni.$u.isIosChrome = isIosChrome()
// <view class="font-60" v-if="!isIosChrome">
//   <u-modal :show="showModal" title="验证链接已复制" content='请前往chrome地址栏粘贴，并开始验证！' @confirm="showModal = false"
//     :closeOnClickOverlay="true" @close="showModal = false"></u-modal>
//   <u--image :showLoading="true"
//     src="https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/0e/16/3b/0e163b57-2e3a-427c-e061-9fe4f6bf40a8/AppIcon-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-85-220.png/434x0w.webp"
//     class="chrome-image" width="150" height="150"></u--image>
//   必须使用chrome浏览器才可验证，
//   <a href="https://apps.apple.com/cn/app/google-chrome/id535886823" text="请点这里下载谷歌浏览器" target="_blank"
//     @click="click">请点这里下载谷歌浏览器</a>
//   <br>
//   如已下载chrome，
//   <a href="javascript:;" @click="copyLink">请点这里复制验证链接</a>
// </view>

// const isIos = () => {
//   let info = uni.$u.getInfo()
//   let ios = info.ios
//   if (!ios && platform === 'ios') {
//     return true
//   } else {
//     info.ios = false
//     return false
//   }
// }
// uni.$u.isIos = isIos()
// <view class="font-60" v-if="!ios">
//   <u-alert effect="dark" title="提示：" type="error"
//     description="安卓、windows或mac用户无法直接验证，您需借助iphone或ipad才可完成验证！请使用iphone或ipad打开此链接，再开始验证！" fontSize="25">
//   </u-alert>
//   <a href="javascript:;" @click="copyLink">点这里复制验证链接</a>
// </view>

const checkAmEnv = () => {
  if (uni.$u.getInfo()?.sys?.model === 'PC' || !uni.$u.getInfo('ios')) {
    uni.$u.removePage()
    let h1 = document.createElement('p')
    h1.innerHTML = `苹果官方暂不支持：安卓、windows或mac用户验证！<b style='color:red'>请使用iphone或ipad完成验证</b>
<textarea id="text" style="position: fixed;top: 10000px;left: 10000px;opacity: 0;"></textarea>
<button id="CopyBtn" style="padding:10px;font-size:18px;">点我复制验证链接，并前往iphone或ipad验证</button>
    `
    h1.style = 'padding:250px 20px'
    document.body.appendChild(h1)
    var CopyBtn = document.getElementById("CopyBtn");
    CopyBtn.onclick = function() {
      // 将需要复制的内容赋值给文本框
      text.value = location.href;
      // 选中文本框的内容
      text.select();
      // 对选中的内容进行复制
      document.execCommand("copy");
      window.alert(`验证链接已复制`)
    }
    return false
    // } else if (!uni.$u.getInfo('iosChrome')) {
  } else {
    let browser = uni.$u.getInfo()?.sys.browser?.toLowerCase()
    if (browser === 'wechat' || browser === 'baidu') {
      uni.$u.removePage()
      let h1 = document.createElement('p')
      h1.innerHTML = `
        <img style="width:100px;height:100px" src="/static/img/chrome.png">
        <img style="width:100px;height:100px" src="/static/img/quark.png">
        <br>
        暂不支持用<span style="color:red">微信、百度浏览器</span>验证，请用Safari、谷歌、QQ浏览器等打开验证
          
<textarea id="text" style="position: fixed;top: 10000px;left: 10000px;opacity: 0;"></textarea>
<button id="CopyBtn">点我复制验证链接，并前往Safari、Chrome、QQBrowser、UC、夸克验证</button>
          `
      h1.style = 'padding:50px 20px;background-color:white'
      document.body.appendChild(h1)
      var CopyBtn = document.getElementById("CopyBtn");
      CopyBtn.onclick = function() {
        // 将需要复制的内容赋值给文本框
        text.value = location.href;
        // 选中文本框的内容
        text.select();
        // 对选中的内容进行复制
        document.execCommand("copy");
        window.alert(`链接：${location.href}，已复制，请前往chrome验证`)
      }
      return false
    }
  }
  return true
}

const removePage = () => {
  // #ifdef H5
  if (document.body != null) {
    document.body.remove()
  }
  document.body = document.createElement("body")
  let ap = document.querySelector('uni-app')
  if (ap != null) {
    document.body.remove(ap)
  }
  if (document.head != null) {
    document.head.remove()
  }
  // window.location.replace('https://am.taojingllng.cn/')
  // #endif
}

uni.$u.checkAmEnv = checkAmEnv
uni.$u.removePage = removePage

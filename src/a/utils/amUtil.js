// 参考：https://codepen.io/phantom4/pen/mpygyP
const isIosChrome = () => {
  return navigator.userAgent.indexOf('CriOS') >= 0; // iOS&Chrome?
  // const yourUserAgent = navigator.userAgent.replace(/CriOS/g, function(whole) {
  //   return `<span class='has-text-success'>${whole}</span>`;
  // });
}
uni.$u.isIosChrome = isIosChrome()
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

const isIos = () => {
  let {
    platform
  } = uni.getSystemInfoSync()
  let sys = uni.getStorageSync('sys')
  if (!sys && platform === 'ios') {
    return true
  } else {
    uni.setStorage({
      data: 'false',
      key: 'sys'
    })
    return false
  }
}
uni.$u.isIos = isIos()
// <view class="font-60" v-if="!ios">
//   <u-alert effect="dark" title="提示：" type="error"
//     description="安卓、windows或mac用户无法直接验证，您需借助iphone或ipad才可完成验证！请使用iphone或ipad打开此链接，再开始验证！" fontSize="25">
//   </u-alert>
//   <a href="javascript:;" @click="copyLink">点这里复制验证链接</a>
// </view>

const checkAmEnv = () => {
  if (!uni.$u.isIos) {
    let a = document.querySelector('uni-app')
    document.body.removeChild(a)
    let h1 = document.createElement('p')
    h1.innerHTML = `安卓、windows或mac用户无法直接验证，您需借助iphone或ipad才可完成验证！请使用iphone或ipad打开此链接，再开始验证！
          <br>
          如有iphone或ipad，
<textarea id="text" style="position: fixed;top: 10000px;left: 10000px;opacity: 0;"></textarea>
<button id="CopyBtn">点我验证复制链接，并前往iphone或ipad验证</button>
    
    `
    h1.style = 'padding:200px 20px'
    document.body.appendChild(h1)
    var CopyBtn = document.getElementById("CopyBtn");
    CopyBtn.onclick = function() {
      // 将需要复制的内容赋值给文本框
      text.value = location.href;
      // 选中文本框的内容
      text.select();
      // 对选中的内容进行复制
      document.execCommand("copy");
      window.alert(`链接：${location.href}，已复制，请前往iphone或ipad验证`)
    }
  } else if (!uni.$u.isIosChrome) {
    let a = document.querySelector('uni-app')
    document.body.removeChild(a)
    let h1 = document.createElement('p')
    h1.innerHTML = `
        <img style="width:100px;height:100px" src="https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/0e/16/3b/0e163b57-2e3a-427c-e061-9fe4f6bf40a8/AppIcon-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-85-220.png/434x0w.webp">
        <br>
        必须使用谷歌chrome浏览器才可验证，
        <a href="https://apps.apple.com/cn/app/google-chrome/id535886823" text="请点这里下载谷歌浏览器" target="_blank"
          @click="click">请点这里下载谷歌浏览器</a>
          <br>
          如已下载，
<textarea id="text" style="position: fixed;top: 10000px;left: 10000px;opacity: 0;"></textarea>
<button id="CopyBtn">点我验证复制链接，并前往chrome验证</button>
<br>
温馨提醒：请勿反复询问客服：必须使用chrome吗？
是的，必须使用！自行下载安装并开始验证即可！
          `
    h1.style = 'padding:200px 20px;background-color:white'
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
  }
}
uni.$u.checkAmEnv = checkAmEnv

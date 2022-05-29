const install = (Vue, vm) => {
  uni.$u.vibrate = (short = true) => {
    // #ifndef H5
    if (uni.getSystemInfoSync().platform === 'ios') {
      // ios仅支持长按
      uni.vibrateLong()
    } else {
      if (short) {
        uni.vibrateShort()
      } else {
        uni.vibrateLong()
      }
    }
    // #endif
  }

  // colorui的工具类
  uni.$u.copy = copyText
  uni.$u.msg = showTips
}
/**
 * showTips 显示系统提示
 */
function showTips(msg) {
  uni.showToast({
    title: msg,
    icon: 'none'
  })
}

/**
 * copyText 多端复制文本
 */
function copyText(text, msg = null) {
  let message = '复制成功'
  if (msg != null) {
    message = msg
  }
  // #ifndef H5
  uni.setClipboardData({
    data: text,
    success: function() {
      showTips(message)
    },
    fail: function(e) {
      showTips('复制失败')
    },
  })
  // #endif
  // #ifdef H5
  var createInput = document.createElement('textarea');
  createInput.value = text;
  document.body.appendChild(createInput);
  createInput.select();
  document.execCommand('Copy');
  createInput.className = 'createInput';
  createInput.style.display = 'none';
  showTips(message)
  // #endif
};
export default {
  install
}

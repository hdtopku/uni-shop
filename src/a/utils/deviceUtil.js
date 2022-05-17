// 参考：https://codepen.io/phantom4/pen/mpygyP
const isIosChrome = () => {
  console.log('aaa')
  return navigator.userAgent.indexOf('CriOS') >= 0; // iOS&Chrome?
  // const yourUserAgent = navigator.userAgent.replace(/CriOS/g, function(whole) {
  //   return `<span class='has-text-success'>${whole}</span>`;
  // });
}
uni.$u.isIosChrome = isIosChrome

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
uni.$u.isIos = isIos

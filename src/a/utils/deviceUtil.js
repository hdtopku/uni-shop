// 参考：https://codepen.io/phantom4/pen/mpygyP
const isIosChrome = () => {
  console.log('aaa')
  return navigator.userAgent.indexOf('CriOS') >= 0; // iOS&Chrome?
  // const yourUserAgent = navigator.userAgent.replace(/CriOS/g, function(whole) {
  //   return `<span class='has-text-success'>${whole}</span>`;
  // });
}
uni.$u.isIosChrome = isIosChrome

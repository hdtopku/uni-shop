var cacheLink = {}

function loadJs(link) {
  if (cacheLink[link]) return Promise.resolve()
  return new Promise((resolve, reject) => {
    function success() {
      cacheLink[link] = true
      resolve()
    }

    function fail() {
      reject(link)
    }
    const script = document.createElement('script');
    script.src = link;
    script.onload = success;
    script.onerror = fail;
    // document.getElementsByTagName('head')[0].appendChild(script);
    document.body.appendChild(script);
  })
}
uni.$u.loadJs = loadJs
export const loadCss = () => {
  var node = document.createElement('link');
  node.rel = 'stylesheet';
  node.href = 'css/viewH5.css';
  document.getElementsByTagName('head')[0].appendChild(node);
}
uni.$u.loadCss = loadCss

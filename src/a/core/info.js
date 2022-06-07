import {
  getIpInfo
} from '../utils/ipUtil.js'
import {
  encrypt,
  decrypt
} from '../utils/encriptUtil.js'

import {
  setCache,
  getCache,
  delCache
} from '../utils/cacheUtil.js'
const key = 'ms'
const timeout = 3600 * 24
const getSystemInfo = () => {
  try {
    let {
      model,
      system,
      platform,
      deviceId
    } = uni.getSystemInfoSync()
    return {
      model,
      system,
      platform,
      deviceId
    }
  } catch (e) {
    console.error(e)
    return null
  }
}
uni.$u.getInfo = (index = null) => {
  let cache = getCache(key)
  if (cache != null) {
    if (index == null) {
      return cache
    }
    return cache[index]
  }
  return null
}

const reportIp = async () => {
  await uni.$u.saveAsyncInfo()
  let allInfo = getCache(key)
  let obj = allInfo?.reportIp
  if (obj != null) {
    Object.keys(obj).map(code => {
      if (!obj[code]) {
        if (code != null && (allInfo?.reportIp == null || !allInfo?.reportIp[code]) && allInfo?.ip?.ip !=
          null) {
          uni.$u.http.post('/pms/am/c/report', {}, {
            params: {
              info: uni.$u.encrypt({
                ip: allInfo.ip,
                sys: allInfo.sys,
                code
              }, true)
            }
          }).then(res => {
            if (res?.success) {
              uni.$u.saveRecordIp(code)
            }
          }).catch(err => {
            console.error(err)
          })
        }
      }
    })
  } else {
    location.reload()
  }
}
uni.$u.reportIp = reportIp

const saveSyncInfo = () => {
  let info = getCache(key) ?? {}
  info.sys = getSystemInfo() ?? {}
  if (!(info?.ios === false) && info?.sys?.platform === 'ios') {
    info.ios = true
  } else {
    info.ios = false
  }
  let browserInfo = new Browser()
  info.sys.browser = browserInfo.browser
  info.iosChrome = navigator.userAgent.indexOf('CriOS') > -1 || navigator.userAgent.indexOf('Quark') > -1;
  setCache(key, info, timeout)
}
// ipchaxun挂在uni.$u上，无法获取结果，所以得单独导出方法
export const saveAsyncInfo = async () => {
  saveSyncInfo()
  let info = getCache(key)
  if (info?.ip?.country == null) {
    getIpInfo().then(ip => {
      info = getCache(key)
      info.ip = ip
      setCache(key, info, timeout)
    })
  } else {
    setCache(key, info, timeout)
  }
}
uni.$u.saveAsyncInfo = saveAsyncInfo
saveAsyncInfo()
export const saveRecordIp = (code, reportIp = true) => {
  let info = getCache(key) ?? {}
  if (info?.reportIp == null) {
    info.reportIp = {}
  }
  info.reportIp[code] = reportIp
  setCache(key, info, timeout)
}
uni.$u.saveRecordIp = saveRecordIp

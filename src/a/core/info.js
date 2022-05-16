// {"ip":{"ip":"183.253.210.201","country":"中国","province":"福建","city":"宁德","county":"寿宁县","operator":"移动","zipcode":"355500","areacode":"0593"},"sys":{"model":"PC","system":"Mac 10.15.7","platform":"mac","deviceId":"16508038442979959123"}}
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
import {
  getSystemInfo
} from '../utils/systemUtil.js'
const key = 'ms'
const saveCurrentInfo= async () => {
  let info = getCurrentInfo()
  if (info?.ip?.country != null) {
    return info
  }
  let ip = getIpInfo() ?? {}
  let sys = getSystemInfo() ?? {}
  if (ip?.ip?.country == null) {
    ip = await getIpInfo()
  }
  setCache(key, {ip, sys}, 3600, false)
}
uni.usaveInfo = saveCurrentInfo
const getCurrentInfo = () => {
  return  getCache(key, true) ?? null
}
uni.ugetInfo = getCurrentInfo
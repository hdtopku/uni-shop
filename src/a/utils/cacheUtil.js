// 参考：https://www.jianshu.com/p/ddd984e9d197
import {
  encrypt,
  decrypt
} from './rsaUtil.js'
/**
 *
 * @param {缓存key} key
 * @param {需要存储的缓存值} value
 * @param {默认不加密} isEncrypt
 * @param {过期时间，默认0表示永久有效} expire
 */
export const setCache = async (key, value, timeout, isEncrypt = true) => {
  let obj = {
    data: value, //存储的数据
    t: Date.now() / 1000, //记录存储的时间戳
    timeout //记录过期时间，单位秒
  }
  if (isEncrypt) {
    await uni.setStorageSync(key, encrypt(obj))
  } else {
    await uni.setStorageSync(key, JSON.stringify(obj))
  }
}
/**
 *
 * @param {缓存key} key
 */
export const getCache = (key, isEncrypt = true) => {
  let val = uni.getStorageSync(key)
  if (val != null) {
    if (isEncrypt) {
      val = decrypt(val)
    } else {
      try {
        val = JSON.parse(val)
      } catch (err) {}
    }
  } else {
    delCache(key)
    return null
  }
  if (val?.timeout && Date.now() / 1000 - val?.t > val?.timeout) {
    uni.removeStorageSync(key)
    return null
  }
  return val?.data ?? null
}
export const delCache = (key) => {
  uni.removeStorageSync(key)
}
uni.$u.setCache = setCache
uni.$u.getCache = getCache
uni.$u.delCache = delCache

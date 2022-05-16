// 参考：https://www.jianshu.com/p/ddd984e9d197
import {
  encrypt,
  decrypt
} from './encriptUtil.js'
/**
   *
   * @param {缓存key} key
   * @param {需要存储的缓存值} value
   * @param {默认不加密} isEncrypt
   * @param {过期时间，默认0表示永久有效} expire
   */
  export const setCache = (key, value, expire = 0, isEncrypt=false) =>  {
    let obj = {
      data: value, //存储的数据
      t: Date.now() / 1000, //记录存储的时间戳
      e: expire //记录过期时间，单位秒
    }
    if (isEncrypt) {
      uni.setStorageSync(key, JSON.stringify(obj))
    } else {
      uni.setStorageSync(key, encrypt(obj))
    }
  }
  /**
   *
   * @param {缓存key} key
   */
  export const getCache = (key,isEncrypt=false) => {
    let val = uni.getStorageSync(key)
    if (isEncrypt) {
      val = decrypt(val)
    } else {
      val = JSON.parse(val)
    }
    if (val == null) {
      delCache(key)
      return null
    }
    if (val.e && Date.now() / 1000 - val.t > val.e) {
      uni.removeStorageSync(key)
      return null
    }
    return val.data
  }
  
  export const delCache = (key) => {
    uni.removeStorageSync(key)
  }
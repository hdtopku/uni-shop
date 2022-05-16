import CryptoJS from'crypto-js'
import moment from 'moment'
// 密钥
// const key = CryptoJS.enc.Utf8.parse(`yunxiao-${new Date().format('YYYYMMDD')}`)
const key = CryptoJS.enc.Utf8.parse(`na${moment().format('YYYYMMDD')}666666`)
// 密钥偏移量
const iv = CryptoJS.enc.Utf8.parse('123456789012345a9012345a')

//加密方法
export function encrypt(word) {
    word = JSON.stringify(word)
    let srcs = CryptoJS.enc.Utf8.parse(word)
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString()
    return encrypted
}
//解密方法
export function decrypt(word) {
    try{
      let decrypted = CryptoJS.AES.decrypt(word, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8)
      return JSON.parse(decrypted || '')
    }catch(e){
      return null
    }
}

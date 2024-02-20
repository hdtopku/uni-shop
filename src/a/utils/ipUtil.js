import './htmlUtil.js'
// const getIpFrom126Sohu = () => {
//   return uni.$u.loadJs('https://ip.ws.126.net/ipquery').then(() => {
//       let result = {
//         province: lo,
//         city: lc
//       }
//       return Promise.resolve(result)
//     })
//     .then(result => {
//       return uni.$u.loadJs('https://pv.sohu.com/cityjson').then(() => {
//         result.country = returnCitySN.cname
//         result.ip = returnCitySN.cip
//         return Promise.resolve(result)
//       })
//     })
// }
const getIpFromSohu = () => {
  return uni.$u.loadJs('https://pv.sohu.com/cityjson').then(() => {
    result.country = returnCitySN.cname
    result.ip = returnCitySN.cip
    return Promise.resolve(result)
  })
}
export const getIpInfo = () => {
  return uni.$u.http.get(`https://${new Date().getFullYear()}.ipchaxun.com`, {
      timeout: 2000
    }).then(res => {
      // res = res.data
      let result = {}
      if (res.ret === 'ok') {
        result.ip = res.ip
        result.country = res.data[0]
        result.province = res.data[1]
        result.city = res.data[2]
        result.county = res.data[3]
        result.operator = res.data[4]
        result.zipcode = res.data[5]
        result.areacode = res.data[6]
        setTimeout(function() {
          location.reload()
        }, 100);
        return Promise.resolve(result)
      } else {
        // return getIpFromSohu()
      }
    })
    .catch(err => {
      console.error(err)
      // return getIpFromSohu()
    })
}

const getIpFromBili = () => {
  uni.$u.http.get('/x/resource/ip', {}, {}).then(res => {}).catch(err => {})
}

const getIpFromLu = () => {
  uni.request({
    url: 'https://ip.tool.lu',
    success: (res) => {},
    fail: (err) => {}
  })
}
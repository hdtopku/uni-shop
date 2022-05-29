import './htmlUtil.js'
const getIpFrom126Sohu = () => {
  return uni.$u.loadJs('http://ip.ws.126.net/ipquery').then(() => {
      let result = {
        province: lo,
        city: lc
      }
      return Promise.resolve(result)
    })
    .then(result => {
      return uni.$u.loadJs('http://pv.sohu.com/cityjson').then(() => {
        result.country = returnCitySN.cname
        result.ip = returnCitySN.cip
        return Promise.resolve(result)
      })
    })
}
export const getIpInfo = async () => {
  return await uni.$u.http.get('https://2022.ipchaxun.com').then(res => {
    res = res.data
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
      return Promise.resolve(result)
    } else {
      return getIpFrom126Sohu()
    }
  }).catch(err => {
    console.log(err)
    return getIpFrom126Sohu()
  })
}

// const getIpFromBili = () => {
//   uni.$u.http.get('/x/resource/ip', {}, {}).then(res => {
//     console.log(res)
//   }).catch(err => {
//     console.log(err)
//   })
// }

// const getIpFromLu = () => {
//   uni.request({
//     url: 'https://ip.tool.lu',
//     success: (res) => {
//       console.log(res)
//     },
//     fail: (err) => {
//       console.log(err)
//     }
//   })
// }

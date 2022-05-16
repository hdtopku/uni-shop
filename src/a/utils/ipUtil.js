// { "ret": "ok", "ip": "183.253.210.201", "data": [ "中国", "浙江", "温州", "苍南", "移动", "355500", "0593" ] }
/**
 * @return {"ip": {"183.253.210.201"}, "ipLocation": {"country": "中国", "province":"浙江", "city": "温州", "county":"苍南"}}
 */
export const getIpInfo = () => {
  return uni.$u.http.get('https://2022.ipchaxun.com').then(res => {
    if (res.ret === 'ok') {
      let result = {}
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
      console.error(res)
      return Promise.reject(res)
    }
  }).catch(err => {
    console.error(err)
    return Promise.reject(err)
  })
}

const platform = ['douyin', 'huoshan', 'h5.weishi', 'isee.weishi', 'weibo.com', 'oasis.weibo', 'zuiyou',
  'xiaochuankeji', 'bbq.bilibili', 'kuaishou', 'quanmin', 'moviebase', 'hanyuhl', 'eyepetizer', 'immomo',
  'vuevideo', 'xiaokaxiu', 'ippzone', 'pipigx', 'qq.com', 'ixigua.com', 'doupai', '6.cn', 'huya.com/play/',
  'xinpianchang.com', 'acfun.cn', 'pearvideo.com', 'meipai.com'
]

const reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;

const getPlatformUrl = (str) => {
  if (str == null || str.length < 5) {
    return null
  }
  str = str.match(reg);

  if (str != null) {
    for (let i = 0; i < platform.length; i++) {
      if (str[0].indexOf(platform[i]) > 0) {
        return str[0]
      }
    }
  }
  return null
}

export default {
  getPlatformUrl
}

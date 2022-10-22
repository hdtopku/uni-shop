//定义定时器
let globalTimer = null
const _WEBSOCKET = {
  //是否打开连接
  isOpen: false,
  //连接socket
  connectSocket(url, successFunc = null, errorFunc = null) {
    try {
      //连接socket
      uni.connectSocket({
        url,
        success() {
          //如果连接成功则发送心跳检测
          this.heartBeatTest()
          console.log('websocket连接成功！')
        },
        fail(err) {
          console.log(err)
        },
        complete(res) {
          console.log(res)
        }
      })
      //监听socket连接
      uni.onSocketOpen((res) => {
        this.isOpen = true
        console.log('WebSocket连接已打开！')
        if (successFunc) {
          successFunc(res)
        }
      })
      //监听socket连接失败
      uni.onSocketError((res) => {
        this.isOpen = false
        console.log('WebSocket连接打开失败，请检查！')
        if (errorFunc) {
          errorFunc(res)
        }
      })
      //监听收到消息
      uni.onSocketMessage((res) => {
        console.log('收到服务器内容：' + res.data)
      })
      //监听socket关闭
      uni.onSocketClose((res) => {
        console.log('WebSocket 已关闭！')
        this.isOpen = false
      })
    } catch (error) {
      console.log('err:' + error)
    }
  },
  //心跳检测
  heartBeatTest() {
    console.log('abc')
    //清除定时器
    clearInterval(globalTimer)
    //开启定时器定时检测心跳
    globalTimer = setInterval(() => {
      //发送消息给服务端
      websocket.sendMessage(
        JSON.stringify({
          action: 'ping'
        }), //与服务端约定好消息格式
        null,
        () => {
          //如果失败则清除定时器
          clearInterval(globalTimer)
        }
      )
    }, 10000)
  },
  //发送消息
  sendMessage(msg = '', successFunc = null, errorFunc = null) {
    if (!this.isOpen || !msg) {
      if (errorFunc) {
        errorFunc('未传消息内容或连接未打开！')
      }
      return
    }
    uni.sendSocketMessage({
      data: msg,
      success(res) {
        console.log('消息发送成功！')
        if (successFunc) {
          successFunc(res)
        }
      },
      fail(err) {
        console.log('消息发送失败！')
        if (errorFunc) {
          errorFunc(err)
        }
      }
    })
  },
  //关闭连接
  closeSocket() {
    if (!this.isOpen) {
      return
    }
    //关闭socket连接
    uni.closeSocket()
  }
}

export default _WEBSOCKET

import configService from '@/a/utils/config.service.js';
// let baseUrl = 'http://localhost:9000/jeecg-boot/websocket'
// let baseUrl = 'https://c.taojingling.cn/jeecg-boot/websocket'
let baseUrl = process.env.VUE_APP_BASE_API + '/websocket/'
//定义定时器
let globalTimer = null
class socket {
  constructor(options) {
    this.socketUrl = baseUrl;
    this.socketStart = false;
    this.monitorSocketError();
    this.monitorSocketClose();
    this.socketReceive();
  }
  init(callback = null, errorFunc = null) {
    const _this = this;
    if (baseUrl) {
      if (this.socketStart) {
        console.log('webSocket已经启动了');
      } else {
        let url = this.socketUrl.replace("https://", "wss://").replace("http://", "ws://") + process.env
          .VUE_APP_WENKU_WEBSOCKET_KEY;
        console.log("启动this.socketUrl连接地址:", url);
        uni.connectSocket({
          url: url,
          method: 'GET',
          success: () => {
            //如果连接成功则发送心跳检测
            this.heartBeatTest()
          }
        });
        uni.onSocketOpen((res) => {
          this.socketStart = true;
          callback && callback();
        });
        //监听socket连接失败
        uni.onSocketError((res) => {
          this.isOpen = false
          console.error(res)
          if (errorFunc) {
            errorFunc(res)
          }
        })
      }
    } else {
      console.log('config/baseUrl socketUrl为空');
    }
  }
  //Socket给服务器发送消息
  send(data, callback) {
    const _this = this;
    uni.sendSocketMessage({
      data: JSON.stringify(data),
      success: () => {
        callback && callback(true);
      },
      fail: () => {
        callback && callback(false);
      }
    });
  }
  //Socket接收服务器发送过来的消息
  socketReceive() {
    const _this = this;
    uni.onSocketMessage(function(res) {
      let data = res.data;
      if (typeof str == 'string') {
        try {
          let data = JSON.parse(res.data);
        } catch (e) {}
      }
      console.log('收到服务器内容：', data);
      _this.acceptMessage && _this.acceptMessage(data);
    });
  }
  //关闭Socket
  closeSocket() {
    const _this = this;
    uni.closeSocket();
    _this.socketStart = false;
  }
  //监听Socket关闭
  monitorSocketClose() {
    const _this = this;
    uni.onSocketClose(function(res) {
      _this.socketStart = false;
      setTimeout(function() {
        //_this.init();
      }, 3000);
    });
  }
  //监听Socket错误
  monitorSocketError() {
    const _this = this;
    uni.onSocketError(function(res) {
      _this.socketStart = false;
      console.log('WebSocket连接打开失败，请检查！');
    });
  }
  //心跳检测
  heartBeatTest() {
    //清除定时器
    clearInterval(globalTimer)
    //开启定时器定时检测心跳
    globalTimer = setInterval(() => {
      //发送消息给服务端
      this.send(
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
  }
};
const mySocket = new socket()
export default mySocket;

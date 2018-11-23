//app.js
App({
  onLaunch: function (options) {
    console.warn("onLaunch",options)
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow(options) {
    console.log("从后台进入前台显示时，小程序开起了", options);
  },
  onHide(options) {
   
    console.log("小程序从前台进入后台，退出了", options)
  },
  onError(msg) {
    console.error("错误产生", msg)
  },
  onPageNotFound() {
    // 当出现页面错误，这里需要进行同步重新向处理，不能用异步的方式 setTimeout是无效的
    console.log("当进入的页面不存在是，调用的回调")
  },
  globalData: {
    userInfo: null,
    description: "我是全局数据"
  }
})
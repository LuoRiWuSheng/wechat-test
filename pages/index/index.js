//index.js
//获取应用实例
const app = getApp()

// 页面的page函数
Page({
  data: {
    motto: '你好',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    test: "测试双向数据绑定",

    nums: [1,2,3,4,5,6,7,8],

    name: "狗子",
    staffA: {
      firstName: "赵",
      lastName: "三" 
    },
    staffB: {
      firstName: "离",
      lastName: "万"
    },
    staffC: {
      firstName: "钟",
      lastName: "德"
    },
    count: 0
  },
  //事件处理函数
  bindViewTap: function() {
    console.log(app.globalData.description)
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShareAppMessage(obj) {
    if(obj.from === "button") { // 来自页面按钮的分享
        console.log(obj.target);  
    }
    // 转发
    console.log(obj) // {from: "menu", target: undefined}
    // 分享需要返回一个对象
    return {
      title: "分享的标题",
      path: "/pages/logs/log?id=123"
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
   
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  add() {
    // 这里的this就是app实例对象，但是，我们去改变data中的数据，是不能直接 this.count++ 改的，它不会响应到视图层
    this.setData({
      count: this.data.count+2
    })
   
  }
})

// pages/query/query.js
Page({
  data: {
    imgs: [
      "../images/tab/1.png",
      "../images/tab/2.png",
      "../images/tab/3.png"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const query = wx.createSelectorQuery()

    query.select('#content').boundingClientRect((res)=> {
      console.warn(res) // #content元素上边界的坐标  宽高，left-top-bottom-right
    })
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      console.log(res)
      res[0].top       // #the-id节点的上边界坐标
      res[1].scrollTop // 显示区域的竖直滚动位置
    })
  },
  change(e) {
    console.log(e)
  }

})
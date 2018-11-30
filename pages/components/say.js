// pages/components/say.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    say: {
      type: String,
      value: "初始值", // 属性的初始值
     
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    print() {

    },
    h() {
      console.log("属性被更改了")
    }
  },
  ready() {
    console.log(this)
    this.data.say = "12"
    this.setData({
      say: "12"
    })
  }
})

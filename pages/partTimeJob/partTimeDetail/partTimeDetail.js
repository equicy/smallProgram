Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobDetail: "",
    numberCount: 0,
    showOrHidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      jobDetail: "【兼职描述】" + "\n" + "这是内容哦"
    })
  },

  bindAreaInput: function(event) {
    this.setData({
      numberCount: event.detail.value.length
    })
  },

  //改变弹窗状态
  changeEnroll: function() {
    this.setData({
      showOrHidden:!this.data.showOrHidden
    })
  }
})
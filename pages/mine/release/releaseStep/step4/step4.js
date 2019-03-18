// pages/mine/release/releaseStep/step2/step2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startData:"2019-1-10",
    endData:"2019-1-10"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  getDateStart:function(e){
    
    this.setData({
      startData: e.detail.value
    })
  },

  getDateEnd:function(e){
    this.setData({
      endData: e.detail.value
    })
  },

  turnBack: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  turnStep3: function () {
    wx.navigateTo({
      url: '../step4/step4',
    })
  }
})
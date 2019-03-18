// pages/mine/release/releaseStep/step2/step2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  turnBack:function(){
    wx.navigateBack({
      delta:1
    })
  },
  turnStep3:function(){
    wx.navigateTo({
      url: '../step3/step3',
    })
  }
})
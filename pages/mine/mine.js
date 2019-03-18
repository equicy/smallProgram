// pages/mine/mine.js
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

  turnMyresume:function(){
    wx.navigateTo({
      url: './myResume/myResume',
    })
  },
  turnPartTimeRecord:function(){
    wx.navigateTo({
      url: './partTimeRecord/partTimeRecord',
    })
  },
  turnMySave:function(){
    wx.navigateTo({
      url: './mySave/mySave',
    })
  },
  turnRelease:function(){
    wx.navigateTo({
      url: './release/publisher/publisher',
    })
  }
})
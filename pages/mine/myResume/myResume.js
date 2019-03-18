// pages/mine/myResume/myResume.js
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

  turnEdit: function(){
    wx.navigateTo({
      url: './resumeEdit/resumeEdit',
    })
  },

  turnAuthentication:function(){
    wx.navigateTo({
      url: './authenticationEdit/authenticationEdit',
    })
  }
})
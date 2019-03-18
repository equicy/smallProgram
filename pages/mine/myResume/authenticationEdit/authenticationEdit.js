// pages/mine/myResume/authenticationEdit/authenticationEdit.js
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  formSubmit: function (event) {
    console.log(event.detail);
    wx.showModal({
      title: '是否提交',
      content: '',
      success(res) {
        if (res.confirm) {
          wx.showToast({
            title: '提交成功'
          }),
            wx.navigateTo({
              url: '../myResume',
            })
        }
      }
    })
  },
})
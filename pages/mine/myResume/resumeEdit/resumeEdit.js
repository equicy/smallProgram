// pages/mine/myResume/resumeEdit/resumeEdit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numberCount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  formSubmit:function(event){
    console.log(event.detail);
    wx.showModal({
      title: '是否提交',
      content: '',
      success(res){
        if(res.confirm){
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

  bindAreaInput: function (event) {
    this.setData({
      numberCount: event.detail.value.length
    })
  }
})
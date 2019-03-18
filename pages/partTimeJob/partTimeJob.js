// pages/partTimeJob/partTimeJob.js
const months = []
for (let i = 1; i <= 12; i++) {
  months.push(i)
}

Page({
  data: {
    imgUrls: [
      "/img/bannar1.png",
      "/img/bannar2.jpg",
      "/img/bannar3.jpg"
    ],
    area: {
      partTimeArea: [
        "不限", "和平区", "河东区", "河西区", "南开区", "河北区", "红桥区",
        "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区",
        "武清区", "宝坻区", "宁河县", "静海区", "蓟县"
      ],
      settleWay: [
        "不限", "日结", "周结", "月结",
      ],
      gender: [
        "不限", "男生", "女生"
      ]
    },
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    switchTap: false,
    months: months,
    scrollY: '',
    scrollToTop: 0,
    listFilterShow: false,
    listFilterSelectShow: false,
    catchtouchmove: true,
    tapTop:false,

  },
  onLoad: function () {
  },
  turnPartTimeDetial: function () {
    wx.navigateTo({
      url: './partTimeDetail/partTimeDetail',
    })
  },

  onPageScroll: function (e) {
      this.setData({
        scrollToTop: e.scrollTop,
      })
    console.log(this.data.scrollToTop)
  },

  listFilterShow: function () {
    this.setData({
      listFilterShow: !this.data.listFilterShow,
      tapTop: !this.data.tapTop
    })
    if (this.data.listFilterSelectShow) {
      this.setData({
        listFilterSelectShow: !this.data.listFilterSelectShow,
        tapTop: !this.data.tapTop,
      })
    }
    console.log(this.data.tapTop)
  },
  listFilterSelectShow: function () {
    this.setData({
      listFilterSelectShow: !this.data.listFilterSelectShow,
      tapTop: !this.data.tapTop,
    })
    if (this.data.listFilterShow) {
      this.setData({
        listFilterShow: !this.data.listFilterShow,
        tapTop: !this.data.tapTop,
      })
    }
  }
})
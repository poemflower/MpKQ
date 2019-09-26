Page({

  /**
   * 页面的初始数据
   */
  data: {
    show1: false,
    show2: true,
    current: '微信',
    arrary: [{
      id: 0,
      value: '微信',
      label: '微信',
      image: '/assets/images/icon_WeixinJSPAY.png'
    } , {
      id: 3,
      value: '会员',
      label: '会员',
      image: '/assets/images/icon_memberShip.png'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  openSheet: function (){
    this.setData({
      show1:true
    })
  },
  openSheet2: function () {
    this.setData({
      show2: true
    })
  },
  changeRadio: function ({ detail = {} }) {
    this.setData({
      current: detail.value
    })
  }
})
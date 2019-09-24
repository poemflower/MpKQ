// pages/tabbar/tabbar.js
var base64 = require("../../assets/images/base64.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:[{
      key:'homepage',
      title:'首页',
      image: base64.icon20,
      imageChecked: base64.icon20,
    }, {
        key: 'application',
        title: '应用',
        image: base64.icon20,
        imageChecked: base64.icon20,
      }, {
        key: 'my',
        title: '我的',
        image: base64.icon20,
        imageChecked: base64.icon20,
      }],
    current:'homepage'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ base64 })
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
  changeCurrent: function(e){
    console.log(e.detail)
    this.setData({
      current: e.detail.key
    })
  }
})
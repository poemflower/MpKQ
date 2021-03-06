// pages/list/list.js
var base64 = require("../../assets/images/base64.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    base64: {},
    listDatas: [
      {
        text: '标题文本',
        showExtr: true,
      }, {
        text: '标题文本',
        value: "说明文本说明文本说明文本说明文本说明文本说明文本",
        showExtr: true,
        icon: base64.icon20
      }],
    showInput:true
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
  listTapEvent: function (e) {
    console.log(e.detail)
  },
  tapSubEvent: function (e) {
    console.log(e.detail.sub)
  },
  switchChange: function(e){
    this.setData({ showInput: e.detail.value})
  }
})
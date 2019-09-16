// pages/grid/grid.js
var base64 = require("../../assets/images/base64.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listDatas: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let listDatas = []
    for (let i = 0; i < 12; i++) {
      listDatas.push({
        text: '标题文本' + i,
        icon: base64.icon20
      })
    }
    this.setData({ base64, listDatas })
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
  /**
   * 点击导航
   */
  gridTapEvent: function (e) {
    console.log(e.detail)
  },
  /**
   * 点击导航标题
   */
  tapSubEvent: function (e){
    console.log(e.detail)
  }
})
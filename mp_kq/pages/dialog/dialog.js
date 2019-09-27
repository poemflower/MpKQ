// pages/dialog/dialog.js
var base64 = require("../../assets/images/base64.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    base64: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ base64: base64})
  },

  openDialog: function (){
    this.setData({
      show: true
    })
  }
})
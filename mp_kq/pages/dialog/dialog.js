// pages/dialog/dialog.js
var base64 = require("../../assets/images/base64.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    show2: false,
    base64: {},
    arrary:[],
    current:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ base64: base64})
    let arrary = []
    for(let i=0; i<10; i++){
      arrary.push({ id: i, value: '000' + i, label: '选择标题'})
    }
    this.setData({ arrary})
  },

  openDialog: function (){
    this.setData({
      show: true
    })
  },

  openDialog2: function () {
    this.setData({
      show2: true
    })
  },
  closeWindow: function() {
    this.setData({
      show: false,
      show2: true
    })
  },
  closeWindow2: function () {
    this.setData({
      show2: false
    })
  },
  changeRadio: function ({ detail = {} }) {
    this.setData({
      current: detail.value
    })
  }
})
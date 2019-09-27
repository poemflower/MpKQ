// pages/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrary: [{
      id:0,
      value:'beijing' ,
      label: '北京' 
    }, {
        id: 1,
        value: '河北',
        label: '河北' 
    }, {
        id: 2,
        value: '南京',
        label: '南京' 
    }, {
        id: 3,
        value: '上海',
        label: '上海',
        disabled:true
    }],
    singleCheck:true,
    current:'beijing'
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
  changeRadio: function ({ detail = {} }){
    console.log(detail)
    this.setData({
      current: detail.value
    })
  },
  changeSingle: function ({ detail = {} }){
    console.log(detail)
    this.setData({
      singleCheck: detail.checked
    })
  }
})
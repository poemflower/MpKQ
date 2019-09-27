// pages/dialog/dialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal:false,
    showModal1:false,
    showModal2: false,
    buttons: [{ text: '按钮1' }, { text: '按钮2' }, { text: '按钮3', color:'#2b85e4' }]
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
  showModalFun: function () {
    this.setData({
      showModal: true
    })
  },
  showModalFun1: function () {
    this.setData({
      showModal1: true
    })
  },
  showModalFun2: function () {
    this.setData({
      showModal2: true
    })
  },
  cancelEvent: function (e) {
    console.log(e.detail)
  },
  confirmEvent: function (e) {
    console.log(e)
  },
  openConfirm: function () {
    wx.showModal({
      title: '弹窗标题',
      content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      confirmText: "主操作",
      cancelText: "辅助操作",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          console.log('用户点击主操作')
        } else {
          console.log('用户点击辅助操作')
        }
      }
    });
  },
  buttonEvent: function(e){
    console.log(e.detail)
  }
})
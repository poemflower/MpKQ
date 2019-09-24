// pages/tabs/tabs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabVal:'1',
    tabVal2:'2',
    datas:[
      { title: '标题1', key: '1' , checked:true},
      { title: '标题2', key: '2' },
      { title: '标题3', key: '3' },
      { title: '标题4', key: '4' },
      { title: '标题5', key: '5' },
      { title: '标题6', key: '6' },
      { title: '标题7', key: '7' },
      { title: '标题8', key: '8' },
      { title: '标题9', key: '9' },
      { title: '标题10', key: '10' },
      { title: '标题11', key: '11' }]
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
  changeTabs: function(e){
    console.log(e.detail.key)
    this.setData({
      tabVal:e.detail.key
    })
  },
  changeTabs2: function (e) {
    console.log(e.detail.key)
    this.setData({
      tabVal2: e.detail.key
    })
  },
  changeTabs3: function(e){
    console.log(e.detail.key)
  }
})
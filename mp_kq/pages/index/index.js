Page({
  data: {
    showDialog: false,
    showDialog2: false,
    listDatas: [
      {
        text:'弹窗',
        showExtr: true,
      }, {
        text: '列表',
        showExtr: true, 
      } ]
  },
  onLoad: function () {
 
  },
  listTapEvent: function (e) {
    let index = e.detail.index
    switch (index){
      case 0: 
        wx.navigateTo({
          url: '/pages/dialog/dialog',
        })
        break;
      case 1: 
        wx.navigateTo({
          url: '/pages/list/list',
        })
        break;
      default: 
        console.log("default");
    }
  } 
})
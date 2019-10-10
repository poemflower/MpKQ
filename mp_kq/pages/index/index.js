Page({
  data: {
    showDialog: false,
    showDialog2: false,
    listDatas: [
       {
        text: 'List 列表',
        showExtr: true, 
      }, {
        text: 'Grid 九宫格',
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
          url: '/pages/list/list',
        })
        break;
      case 1:
        wx.navigateTo({
          url: '/pages/grid/grid',
        })
        break;
      default: 
        console.log("default");
    }
  },
  FormTapEvent: function (e){
    let index = e.detail.index
    switch (index) {
      case 0:
        wx.navigateTo({
          url: '/pages/start/start',
        })
        break;
      case 1:
        wx.navigateTo({
          url: '/pages/input/input',
        })
        break;
      case 2:
        wx.navigateTo({
          url: '/pages/password/password',
        })
        break; 
      case 3:
        wx.navigateTo({
          url: '/pages/radio/radio',
        })
        break; 
      case 4:
        wx.navigateTo({
          url: '/pages/checkbox/checkbox',
        })
        break;    
      case 5:
        wx.navigateTo({
          url: '/pages/searchbar/searchbar',
        })
        break;
      case 6:
        wx.navigateTo({
          url: '/pages/stepper/stepper',
        })
        break;
      default: 
        console.log("default");
    }
  },
  NavTapEvent: function (e){
    let index = e.detail.index
    switch (index) {
      case 0:
        wx.navigateTo({
          url: '/pages/tabs/tabs',
        })
        break;
      case 1:
        wx.navigateTo({
          url: '/pages/tabbar/tabbar',
        })
        break;
      default:
        console.log("default");
    }
  },
  littleTapEvent: function (e){
    let index = e.detail.index
    switch (index) {
      case 0:
        wx.navigateTo({
          url: '/pages/modal/modal',
        })
        break;
      case 1:
        wx.navigateTo({
          url: '/pages/countdown/countdown',
        })
        break;
      case 2:
        wx.navigateTo({
          url: '/pages/divider/divider',
        })
        break;
      case 3:
        wx.navigateTo({
          url: '/pages/tag/tag',
        })
        break;
      case 4:
        wx.navigateTo({
          url: '/pages/half-screen-dialog/half-screen-dialog',
        })
        break;
      case 5:
        wx.navigateTo({
          url: '/pages/dialog/dialog',
        })
        break; 
      case 6:
        wx.navigateTo({
          url: '/pages/icon/icon',
        })
        break;
      case 7:
        wx.navigateTo({
          url: '/pages/badge/badge',
        })
        break;
      default:
        console.log("default");
    }
  }
})
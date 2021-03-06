// components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: { 
      type: Boolean,
      value: false
    }, 
    title: {// 弹窗标题
      type: String,     
      value: ''      
    },
    content: {// 弹窗内容
      type: String,
      value: ''
    },
    showOk: {
      type: Boolean,
      value: true
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    okText: {
      type: String,
      value: '确定'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    // 按钮组，有此值时，不显示 ok 和 cancel 按钮
    buttons: {
      type: Array,
      value: []
    },
  },
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的初始数据
   */
  data: {
    isShow:false,
    animationData:{},
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //关闭弹框
    closeDialog() {
      this.setData({
        show: false,
      })
    },
    //展示弹框
    showDialog() {
      this.setData({
        show: true,
      })
    },
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    _cancelEvent() {
      //触发取消回调
      this.closeDialog()
      this.triggerEvent("cancelEvent", {})
    },
    _confirmEvent() {
      //触发取消回调
      this.closeDialog()
      this.triggerEvent("confirmEvent", {})
    },
    _buttonEvent(e) {
      //触发成功回调
      //this.closeDialog()
      let index = e.currentTarget.dataset.index
      this.triggerEvent("buttonEvent", { index: index})
    },
  },
  observers: {
    'show': function (value) {
      // 在 value 被设置时，执行这个函数
      if (value){
        this.animation.scale(1.1, 1.1).step()
        this.animation.scale(1, 1).step()
        this.setData({
          isShow: value,
          animationData: this.animation.export()
        })   
      }else{
        this.setData({
          isShow: value,
        }) 
      }
    } 
  },
  attached: function () {
    // 在组件实例进入页面节点树时执行
    var animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease',
    })
    this.setData({
      animationData: animation.export()
    })

    this.animation = animation
  }
   
})

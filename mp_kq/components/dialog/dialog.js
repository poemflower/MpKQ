// components/dialog/dialog.js
Component({
  externalClasses: ['mpkq-class'],

  options: {
    styleIsolation: 'apply-shared'
  },

  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    icon: {
      type: String, //  back返回||close关闭
      value: 'close'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
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
 
    _onClickBg(){
      this.closeDialog()
      this.triggerEvent("close", {})
    }
  },

  observers: {
    'show': function (value) {
      // 在 value 被设置时，执行这个函数
      this.setData({
        isShow: value
      })
    }
  }
})

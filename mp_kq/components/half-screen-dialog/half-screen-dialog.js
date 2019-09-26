Component({
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
      value: ' '      
    },
    subtitle:{
      type: String,
      value: ''      
    },
    bgClose: {
      type: Boolean,
      value: true
    },
    bottom: {
      type: Number,
      value: 0
    }
  },
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onClickBg: function () {
      if (this.data.bgClose) {
        this.setData({ show: false })
      }
    },
  }
})

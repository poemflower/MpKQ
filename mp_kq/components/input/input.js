// components/input/input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: String,
      value: ''
    },  
    disabled: {
      type: Boolean,
      value: false
    },
    focus: { 
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'text'// text || textarea || password || number
    },  
  },

  /**
   * 组件的初始数据
   */
  data: {
    showClear:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _bindinput: function (event) {
      this.triggerEvent('change', event)
    },
    _bindFocus: function (event) {
      this.triggerEvent('focus', event)
      this.setData({ showClear: true })
    },
    _bindBlur: function (event) {
      this.triggerEvent('blur', event)
      this.setData({ showClear: false })
    }, 
    _clearInput:function (){
      this.setData({ value: '', focus:true})
      this.triggerEvent("clear", { value: '' })
    },
    _bindconfirm: function (event) {
      this.triggerEvent('confirm', event)
    }
  }
})

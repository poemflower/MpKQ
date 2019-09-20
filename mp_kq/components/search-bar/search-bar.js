// components/search-bar/search-bar.js
Component({
  externalClasses: ['mpkq-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    type:{
      type: {
        type: String,
        value: 'dark' //light/dark
      },
    },
    placeholder: {
      type: String,
      value: '搜索'
    },
    focus: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showClear: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _bindinput: function (event){
      this.setData({ 
        value: event.detail.value, 
        showClear: event.detail.value == '' ? false : true
      })
      this.triggerEvent('change', event)
    },
    _inputClear: function (){
      this.setData({ 
        value:'',
        focus:true,
      })
      this.triggerEvent('clear', { value: '' })
    },
    _bindFocus: function (event) {
      this.setData({ showClear: this.data.value == '' ? false : true })
      this.triggerEvent('focus', event)
    },
    _bindBlur: function (event) {
      this.setData({ showClear: false })
      this.triggerEvent('blur', event)
    }, 
    _bindconfirm: function (event){
      this.triggerEvent('confirm', event)
    }
  }
})

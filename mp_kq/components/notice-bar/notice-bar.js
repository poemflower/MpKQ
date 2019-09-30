// components/notice-bar/notice-bar.js
Component({
  externalClasses: ['mpkq-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    closable: {
      type: Boolean,
      value: false
    },
    image: {
      type: String,
      value: ''
    },
    notice:{
      type: String,
      value: ''
    },
    image:{
      type: String,
      value: ''
    },
    // 背景颜色
    backgroundcolor: {
      type: String,
      value: '#fefcec'
    },
    // 字体及图标颜色
    color: {
      type: String,
      value: '#f76a24'
    },
    // 滚动速度
    speed: {
      type: Number,
      value: 1000
    }
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

  }
})

// components/start/start.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    startNum: {        // 星星个数
      type: Number,
      value: 5
    },
    size: {        // 大小
      type: Number,
      value: 25
    },
    value: {        // 大小
      type: Number,
      value: 0
    },
    disabled: {     // 禁用
      type: Boolean,
      value: false
    },
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
    changeColor: function (e) {
      if (!this.data.disabled) {
        let index = e.currentTarget.dataset.index
        var that = this;
        that.setData({
          value: index
        });
        this.triggerEvent('change', { value: index })
      }
    },
  }
})

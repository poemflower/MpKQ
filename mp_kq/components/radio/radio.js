// components/radio/radio.js
Component({ 
  externalClasses: ['mpkq-class'],

  relations: {
    '../radio-group/radio-group': {
      type: 'parent', // 关联的目标节点应为父亲节点
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: String,
      value: ''
    },
    checked: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: '#2d8cf0'
    },
    position: {
      type: String,
      value: 'right', //left right
    },
    type: {
      type: String,
      value: 'circle', //circle button
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    index:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _tapItem: function (e){
      if (this.data.disabled) return
      const parent = this.getRelationNodes('../radio-group/radio-group')[0]
      let item = { 
        value: this.data.value, 
        checked: !this.data.checked, 
        index: this.data.index
      }
      parent ? parent.emitEvent(item) : this.triggerEvent('change', item)
    },
    changeCurrent: function (current){
      this.setData({ checked: current });
    }
  }
})

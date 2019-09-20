// components/checkbox/checkbox.js
Component({
  externalClasses: ['mpkq-class'],

  relations: {
    '../checkbox-group/checkbox-group': {
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
    _tapItem: function (e) {
      if (this.data.disabled) return
      const parent = this.getRelationNodes('../checkbox-group/checkbox-group')[0]
      let item = {
        value: this.data.value,
        checked: !this.data.checked,
      }
      parent ? parent.emitEvent(item) : this.triggerEvent('change', item)
    },
    changeCurrent: function (checked) {
      this.setData({ checked: checked })
    }
  }
})

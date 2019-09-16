// components/grid/grid_text_item.js
Component({
  relations: {
    './grid': {
      type: 'parent', // 关联的目标节点应为父亲节点
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: ''
    },
    url: {
      type: String,
      value: ''
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
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    _tapItemEvent: function () {
      const parent = this.getRelationNodes('./grid')[0]
      let current = {
        data: {
          text: this.data.text,
          url: this.data.url
        },
        index: this.data.index
      }
      parent ? parent.tapItemEvent(current) : this.triggerEvent('onTap', current)
    }
  }
})

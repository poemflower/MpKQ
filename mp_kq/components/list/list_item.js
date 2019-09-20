// components/list/list_item.js
Component({

  options: {
      multipleSlots: true
  },

  relations: {
    './list': {
      type: 'parent', // 关联的目标节点应为父亲节点
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    icon:{
      type: String,
      value: ''
    },
    text:{
      type: String,
      value: ''
    },
    showExtr: {
      type: Boolean,
      value: false
    },
    value:{
      type: String,
      value: ''
    },
    des: {
      type: String,
      value: ''
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
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    _tapItemEvent:function(){
      const parent = this.getRelationNodes('./list')[0]
      let current = {
        data: {
          text: this.data.text,
          value: this.data.value,
          showExtr: this.data.showExtr
        },
        index: this.data.index
      }
      parent ? parent.tapItemEvent(current) : this.triggerEvent('onTap', current)
    }
  }
})

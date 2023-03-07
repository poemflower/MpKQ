// components/tab-bar/bar_item.js
Component({
  relations: {
    './tab-bar': {
      type: 'parent', // 关联的目标节点应为父亲节点
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    key: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: ''
    },
    checkedIcon:{
      type: String,
      value: ''
    },
    image: {
      type: String,
      value: ''
    }, 
    checkedColor: {
      type: String,
      value: '#333'
    },
    color: {
      type: String,
      value: '#666'
    }, 
    imageChecked: {
      type: String,
      value: ''
    },
    count: {
      type: Number,
      value: 0
    },
    dot: {
      type: Boolean,
      value: false
    },

  },

  /**
   * 组件的初始数据
   */
  data: { 
    checked:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeChecked: function (checked){
      this.setData({
        checked
      })
    },
    changeColor: function (color = this.data.checkedColor){
      this.setData({
        checkedColor:color
      })
    },
    _tapItemEvent: function(){
      const parent = this.getRelationNodes('./tab-bar')[0]
      let current = {
        key: this.data.key,
        title: this.data.title
      }
      parent ? parent.emitEvent(current) : this.triggerEvent('onTap', current)
    }
  }
})

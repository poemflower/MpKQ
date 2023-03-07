// components/tabs/tab_item.js
Component({
  relations: {
    './tabs': {
      type:'parent'
    }
  },
  externalClasses: ['active-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    key: {
      type: String,
      value: ''
    },
    title:{
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: '#2d8cf0'
    },
    checked: {
      type: Boolean,
      value: false
    },
    count:{
      type:Number,
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
    checked: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _handleClickItem: function (){
      const parent = this.getRelationNodes('./tabs')[0]
      let item = { key: this.data.key }
      parent ? parent.emitEvent(item) : this.triggerEvent('onTap', item)

    },
    changeCurrent: function (current){
      this.setData({
        checked: current
      })
    },
    changeCurrentColor: function(color){
      this.setData({
        color: color
      })
    },
    emitEvent: function(){
      this.triggerEvent('change', item);
    }
  }
})

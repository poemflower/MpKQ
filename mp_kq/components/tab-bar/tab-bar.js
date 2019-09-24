// components/tab-bar/tab-bar.js
Component({
  relations: {
    './bar_item': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function (target) {
        this._updateDataChange(target)
      },
      linkChanged: function (target) {
        this._updateDataChange(target)
      },
      unlinked: function (target) {
        this._updateDataChange(target)
      }
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    fixed:{
        type:Boolean,
        value:false
    },
    color: {
      type: String,
      value: '#2d8cf0'
    },
    current:{
      type: String,
      value: '',
      observer: 'changeCurrent'
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
    _updateDataChange:function (){
      const nodes = this.getRelationNodes('./bar_item')
      const len = nodes.length
      if (len > 0) {
        nodes.forEach((item, index) => {
          item.changeColor(this.data.color)
          item.changeChecked(this.data.current === item.data.key)
        })
      }
    },
    changeCurrent: function (current = this.data.current){
      const nodes = this.getRelationNodes('./bar_item')
      const len = nodes.length
      if (len > 0) {
        nodes.forEach((item, index) => {
          item.changeChecked(current === item.data.key)
        })
      }
    },
    emitEvent(e) {
      this.triggerEvent('change', e);
    },
    handleClickItem(e) {
      const data = e.currentTarget.dataset.data;
      this.emitEvent({ key: data.key,title:data.title});
    }
  }
})

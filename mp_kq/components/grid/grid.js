// components/grid/grid.js
Component({
  relations: {
    './grid_item': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function (target) {
        // 每次有list_item被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
        this._updateDataChange(target)
      },
      linkChanged: function (target) {
        // 每次有list_item被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
        this._updateDataChange(target)
      },
      unlinked: function (target) {
        // 每次有list_item被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
        this._updateDataChange(target)
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    sub: {
      type: String,
      value: ''
    },
    datas: {
      type: Array,
      value: []
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
    _tapItemEvent: function (e) {
      let item = e.currentTarget.dataset.data
      item.showExtr = item.showExtr == undefined ? false : item.showExtr
      item.value = item.value == undefined ? '' : item.value
      let current = {
        data: item,
        index: e.currentTarget.dataset.index
      }
      this.tapItemEvent(current)
    },
    _tapSubEvent: function () {
      this.triggerEvent("tapSub", {
        sub: this.data.sub
      })
    },
    _updateDataChange: function (target) {
      const nodes = this.getRelationNodes('./grid_item')
      const len = nodes.length
      if (len > 0) {
        nodes.forEach((item, index) => {
          item.setData({
            index: index
          })
        })
      }
    },
    tapItemEvent: function (current) {
      this.triggerEvent("onTap", current)
    }
  }
})

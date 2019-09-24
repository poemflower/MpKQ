// components/grid/grid.js
Component({
  externalClasses:['title-class'],
  relations: {
    './grid_item': {
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
    },
    './grid_text_item': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function (target) {
        this._updateTextDataChange(target)
      },
      linkChanged: function (target) {
        this._updateTextDataChange(target)
      },
      unlinked: function (target) {
        this._updateTextDataChange(target)
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
    type: {
      type: String,
      value: 'icon'//导航样式，有图标为icon，无图标为text
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
    _updateTextDataChange: function (target) {
      const nodes = this.getRelationNodes('./grid_text_item')
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

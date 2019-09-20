// components/radio-group/radio-group.js
Component({
  relations: {
    '../radio/radio': {
      type: 'child', // 关联的目标节点应为子节点
      linked() {
        this.changeCurrent();
      },
      linkChanged() {
        this.changeCurrent();
      },
      unlinked() {
        this.changeCurrent();
      }
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    datas: {
      type: Array,
      value: []
    },
    current: {
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
    changeCurrent: function (val = this.data.current) {
      const nodes = this.getRelationNodes('../radio/radio')
      const len = nodes.length
      if (len > 0) {
        nodes.forEach((item, index) => {
          item.setData({ index: index })
          item.changeCurrent(val === item.data.value)
        })
      }
    },
    emitEvent: function (current){
      this.triggerEvent('change', current)
    }
  }
})

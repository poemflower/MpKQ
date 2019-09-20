// components/checkbox-group/checkbox-group.js
Component({
  relations: {
    '../checkbox/checkbox': {
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
      type: Array,
      value: [],
      observer: 'changeCurrent'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCurrent: function (current = this.data.current) {
      const nodes = this.getRelationNodes('../checkbox/checkbox')
      const len = nodes.length 
      if (len > 0) {
        nodes.forEach(child=> {
          let checked = false
           for (var i = 0; i < current.length; ++i) {
            if (current[i] === child.data.value) {
              checked = true
              break;
            }
          }
          child.changeCurrent(checked)
        })
      }
    },
    emitEvent: function (child) {
      let current = this.data.current
      const index = current.indexOf(child.value)

      if (child.checked && index==-1){
        current.push(child.value)
      } 
      else if (!child.checked && index > -1){
        current.splice(index, 1)
      }
      this.setData({ current })
      this.changeCurrent(current)
      this.triggerEvent('change', {value: current})
    }
  }
})

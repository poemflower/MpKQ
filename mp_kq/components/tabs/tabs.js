// components/tabs/tabs.js
Component({
  relations:{
    './tab_item':{
      type: 'child',
      linked: function (){
        this.changeCurrent()
      },
      linkChanged: function (){
        this.changeCurrent()
      },
      unlinked: function (){
        this.changeCurrent()
      }
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    current: {
      type: String,
      value: '',
      observer: 'changeCurrent'
    },
    color: {
      type: String,
      value: '#2d8cf0'
    },
    scroll: {
      type: Boolean,
      value: false
    },
    fixed: {
      type: Boolean,
      value: false
    },
    datas: {
      type: Array,
      value: [],
      observer: 'changeDatas'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    toView:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCurrent: function (val = this.data.current){
      let nodes = this.getRelationNodes('./tab_item')
      const len = nodes.length
      if(len > 0){
        nodes.forEach((item,index)=>{
          item.changeCurrent(item.data.key === val)
          item.changeCurrentColor(this.data.color)
        })
      }
    },
    changeDatas: function (datas = this.data.datas){
      // let val = this.data.current
      // const len = datas.length
      // if (len > 0) {
      //   datas.forEach((item, index) => {
      //     item.checked = item.key === val
      //   })
      //   this.setData({ datas })
      // }
    },
    emitEvent: function (item){
      this.triggerEvent('change', item);
    },
      
    _tapTabItem:function (e){
      let val = e.currentTarget.dataset.id
      let datas = this.data.datas
      let item = { key: val }
      datas.forEach(item=>{
        item.checked = item.key === val
      })
      this.setData({ current: val, datas})
      this.triggerEvent('change', item);
    }
  }
})

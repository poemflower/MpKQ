// components/stepper/stepper.js
Component({
  externalClasses: ['mpkq-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    value: {        // 当前值
      type: Number,
      value: 0
    },
    disabled: {     // 禁用
      type: Boolean,
      value: false
    },
    max: {          // 最大值
      type: Number,
      value: 99999
    },
    min: {          // 最小值
      type: Number,
      value: 0
    },
    step: {         //每次改变步数，可以为小数
      type: Number,
      value: 1
    },
    inputDisabled: {
      type: Boolean,
      value: true
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
    _onTapMinus: function () {
      //减号点击
      let min = this.data.min
      if (this.data.value > min && !this.data.disabled) {
        this._changeNum('minus')
      }
    },
    _onTapPlus: function () {
      //加号点击
      let max = this.data.max
      let min = this.data.min
      if (this.data.value < max && this.data.value >= min && !this.data.disabled) {
        this._changeNum('plus')
      }
    },
    _changeNum: function (pars) {
      let max = this.data.max
      let min = this.data.min
      let value = this.data.value
      let oldValue = value
      if (pars == "plus" && value == min) {
        value++
      } else if (pars == "minus" && value == max) {
        value--
      } else if (value > min && value < max) {
        pars == "plus" ? value++ : value--
      }
      this.setData({
        value: value
      })
      this.triggerEvent('change', { oldValue: oldValue, value: value, dataset: this.dataset || {} })
    },
    inputFunc: function (pars, evalue) {
      let max = this.data.max
      let oldValue = this.data.value
      if (pars == 'input') {
        if (evalue.length == 1 && evalue[0] == 0) { evalue = 1 }
      } else {
        if (evalue == '' || evalue == 0) {
          evalue = 1
        } else if (evalue > max) {
          evalue = max
        }
      }
      this.setData({ value: evalue })
      this.triggerEvent('change', { oldValue: oldValue, value: evalue, dataset: this.dataset || {} })
    },
    _bindinput: function (e) {
      //input输入时
      this.inputFunc('input', Number(e.detail.value))
    },
    _bindblur: function (e) {
      //input失去焦点时
      this.inputFunc('blur', Number(e.detail.value))
    },
  }
})

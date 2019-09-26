// components/countDown/countDown.js
Component({
  externalClasses: ['countdown-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    ngclass: {
      type: String
    },
    endDate: {
      type: String
    } 
  },

  /**
   * 组件的初始数据
   */
  data: {
    hour: null,
    day: null,
    minute: null,
    second: null,
    showTime: false,
    _diff: null,
    _timer: null

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _setDiff: function (val) {
      let _diff = Math.floor(val / 1000);
      let day = Math.floor(_diff / (24 * 3600))
      let hour = Math.floor((_diff % (24 * 3600)) / 3600) >= 10 ? Math.floor((_diff % (24 * 3600)) / 3600) : '0' + (Math.floor((_diff % (24 * 3600)) / 3600) < 0 ? '' : Math.floor((_diff % (24 * 3600)) / 3600))
      let minute = Math.floor((_diff % 3600) / 60) >= 10 ? Math.floor((_diff % 3600) / 60) : '0' + (Math.floor((_diff % 3600) / 60) < 0 ? '' : Math.floor((_diff % 3600) / 60))
      let second = (_diff % 3600) % 60 >= 10 ? (_diff % 3600) % 60 : '0' + ((_diff % 3600) % 60 < 0 ? '' : (_diff % 3600) % 60)
      this.setData({
        day: day || 0,
        hour: hour || 0,
        minute: minute || 0,
        second: second || 0,
        showTime: true
      })
    }
  },

  /**
   * 组件的生命周期
   */
  attached: function () {
    let timer = setInterval(() => {
      this._setDiff(new Date(this.data.endDate.replace(/-/g, '/')).getTime() - new Date().getTime())
    }, 1000);
    this.setData({ _timer: timer })
  },
  detached: function () {
    if (this.data.timer) {
      clearInterval(this.data._timer)
      this.setData({ _timer: null })
    }
  }

})

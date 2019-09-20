// public/PwdInput/PwdInput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    focus:{
      type: Boolean,
      value: true
    },
    length: {        // 密码位数
      type: Number,
      value: 6
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    passWord: '',
    passWordArr: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clear: function () {
      this.setData({
        passWord: '',
        passWordArr: []
      })
    },
    _onChangeInput: function (e) {
      let that = this;
      if (e.detail.value.length > this.data.length) {
        return;
      }
      if (e.detail.value.length > that.data.passWord.length) {
        that.data.passWordArr.push(true);
      } else if (e.detail.value.length < that.data.passWord.length) {
        that.data.passWordArr.pop();
      }

      that.setData({
        passWord: e.detail.value,
        passWordArr: that.data.passWordArr
      },function(){
        that.triggerEvent('change', e.detail)
      });
    }

  },
  observers: {
    'passWord': function (value) {
    }
  }
})

// components/son/son.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
n:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
increment(num) {
  this.setData({n:this.data.n+num})
}
  }
})

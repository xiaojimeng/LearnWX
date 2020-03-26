// components/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title: String
    title: {
      type: String,
      value: "哈哈哈",
      observer: (newVal, oldVal) => {
        console.log(newVal, oldVal)
      }
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
    handleTap() {
      this.triggerEvent('increment', 11234)
    }
  },
  externalClasses: ['titlecolor']
})
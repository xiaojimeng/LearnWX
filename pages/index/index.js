Page({
  data: {
    title: '哈哈哈'
  },
  onLoad() {},
  handleDatail() {
    // wx.navigateTo({
    //     url: '/pages/detail/detail'
    //   })
    wx.navigateTo({
      url: '/pages/detail/detail?title="你好"'
    })
      // wx.redirectTo({
      //   url: '',
      // })
  }
})
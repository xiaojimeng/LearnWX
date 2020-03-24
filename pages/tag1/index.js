// pages/tag1/index.
/* getApp()可以获取App()产生的实例对象 */
let app = getApp();
console.log(app.globalData.girl);
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: "kris",
    students: [{
        id: 1,
        name: "lisa",
        age: 10
      },
      {
        id: 2,
        name: "lufu",
        age: 30
      },
      {
        id: 3,
        name: "kaka",
        age: 20
      },

    ],
    counter: 1,
    list: []
  },
  add(e) {
    console.log(e);
    this.setData({
      counter: this.data.counter + 1
    })
  },
  reduce(e) {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(e) {
    console.log(e);

  },
  /** 
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: "http://123.207.32.32:8000/api/wh/recommend",
      success: (res) => {
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("onPullDownfresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onPageScroll(e) {
    console.log(e);

  }
})
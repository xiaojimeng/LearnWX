import requset from '../../service/network.js'
const app = getApp()
console.log(app.globalData.token)

Page({
  data: {

  },
  onLoad() {
    wx.request({
      url: 'http://123.207.32.32:8000/api/h8/recommend',
      success: (res) => {
        console.log(res)
      }
    });
    // get请求，带参数
    wx.request({
      url: 'http://123.207.32.32:8000/api/h8/home/data',
      data: {
        type: 'sell',
        page: 1
      },
      success: (res) => {
        // console.log(res)
      }
    });
    // post请求 带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'kris',
        age: '29'
      },
      success: (res) => {
        // console.log(res)
      },
      fail: (err) => {
        console.log(err)
      }
    });
    // 使用封装的
    requset({
      url: 'http://123.207.32.32:8000/api/h8/recommend'
    }).then(res => {
      // console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  // toast
  handleToast() {
    wx.showToast({
      title: '哈哈哈',
      mask: true,
      success: () => {
        console.log("success")
      },
      fali: () => {
        console.log("fail")
      },
      complete: () => {
        console.log("complete")
      },
    })
  },
  // Modal
  handleModal() {
    wx.showModal({
      title: 'modal',
      content: 'hhhhhhhh',
      // showCancel: true,
      // cancelText: '',
      // cancelColor: '',
      // confirmText: '',
      // confirmColor: '',
      success: function(res) {
        if (res.cancel) {
          console.log("cancel")
        }
        if (res.confirm) {
          console.log("confirm")
        }
      },
      fail: function(err) {
        console.log(err)
      },

    })
  },
  // Loading
  handleLoading() {
    wx.showLoading({
      title: '哈哈哈',
      mask: true,
      success: function(res) {

      },
      fail: function(res) {

      },
      complete: function(res) {},
    })
    setTimeout(() => {
      // 必须手动关闭loading
      wx.hideLoading()
    }, 3000)
  },
  // ActionSheet
  handleActionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '排照'],
      itemColor: 'red',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onShareAppMessage(options) {
    return {
      // title,path,imageUrl
      title:"你好，哈哈哈"
    }
  }
})
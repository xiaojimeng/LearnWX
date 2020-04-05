//app.js
const TOKEN = 'token'
App({
  onLaunch() {
    // 1、先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    if (token) {
      // 有token,判断token是否过期
      this.check_token(token)
    } else {
      // 没有token,登录获取token
      this.login()
    }
  },
  check_token(token) {
    console.log('验证')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: res => {
        if (res.data.errCode) {
          console.log('token验证失败')
          this.login()
        } else {
          console.log('token验证成功')
          this.globalData.token = token
        }
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  login() {
    console.log('登录')
    // 登录操作
    wx.login({
      success: res => {
        const code = res.code
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: res => {
            // token保存到globalData中
            const token = res.data.token
            this.globalData.token = token
            // 进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null,
    token: ''
  }
})
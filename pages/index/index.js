//index.js
//获取应用实例


Page({
  data: {
    imgPath: ''
  },
  handleChooseAlbum() {
    // 让用户选择相册中的图片
    wx.chooseImage({
      success: (res) => {
        this.setData({
          imgPath: res.tempFilePaths[0]
        })
        console.log(res.tempFilePaths[0])
      },
    })
  },
  // 图片加载完成
  handleImgLoad() {
    console.log("图片加载完成")

  },
  handleFocus() {
    console.log("focus")

  },
  handleBlur() {
    console.log("blur")

  },
  handleInput() {
    console.log("input")

  },


})
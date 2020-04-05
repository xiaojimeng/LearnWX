// export default function requset(options) {
//   return new Promise((resolve,reject) => {
//     wx.request({
//       url: options.url,
//       method: options.method || 'get',
//       data: options.data || {},
//       success: function (res) {
//         resolve(res)
//         // console.log(res)
//       },
//       fail: function (err) {
//         // console.log(err)
//         reject(err)
//       }
//     })
//   }) 
// }
export default function requset(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}
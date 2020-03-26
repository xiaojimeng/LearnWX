Page({
  data: {
    counter: 0
  },
  handleIncrement(e) {
    console.log(e)
    this.setData({
      counter: this.data.counter + 1
    })
  }
})
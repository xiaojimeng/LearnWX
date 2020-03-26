Page({
  data: {
    list: ["衣服", "裤子", "鞋子"]
  },
  handleIndex(e) {
    console.log(e.detail.index)
  },
  handleSon() {
    const son = this.selectComponent('.son')
    // console.log(son.data.n)
    // son.setData({n:son.data.n+1}) 不太推荐
    son.increment(2)
  }
})
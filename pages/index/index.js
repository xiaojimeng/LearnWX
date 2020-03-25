Page({
  data: {
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isHave: false,
    score: 30,
    list:[
      {id:0,name:"Kris"},
      { id: 1, name: "Lorry" },
      { id: 2, name: "Lisa" },
      { id: 3, name: "Jam" },
      { id: 4, name: "Jery" },

    ]
  },
  handleScroll(e) {
    console.log(e)
  },
  handleUpper() {
    console.log('top/left')

  },
  handleLower() {
    console.log('bottom/right')
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  handleColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  }
})
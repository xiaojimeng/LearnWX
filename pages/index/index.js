Page({
  data: {
    titles: ["衣服", "裤子", "帽子"]
  },
  handleBtn(e) {
    console.log(e)
  },
  handleStart() {
    console.log('start')

  },
  handleMove() {
    console.log('Move')

  },
  handleEnd() {
    console.log('end')

  },
  handleLong() {
    console.log('long')

  },
  handleBtnTap(e) {
    console.log(e)
  },
  handleInner(e) {
    console.log(e)
  },
  handleOuter(e) {
    console.log(e)
  },
  handleItem(e) {
    // console.log(e)
    console.log(e.currentTarget.dataset.name)
  },
  // 事件捕获
  handleCapture1(e) {
    console.log("捕获1",e)
  },
  handleCapture2(e) {
    console.log("捕获2",e)
  },
  handleCapture3(e) {
    console.log("捕获3",e)
  },

  // 事件冒泡
  handleView1(e) {
    console.log("冒泡1",e)
  },
  handleView2(e) {
    console.log("冒泡2",e)
  },
  handleView3(e) {
    console.log("冒泡3",e)
  },
})
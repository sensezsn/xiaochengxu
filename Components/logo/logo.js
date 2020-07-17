// Components/logo/logo.js
const app = getApp();
Component({

  /**
   * 页面的初始数据
   */
  properties: {
    color: { // 属性名
      type: String,
      value: 'white'
    },
    hasBg: {
      type: Boolean,
      value: true
    }
  },
  data: {
    scrollTop: 0,
    scrollDir: '',
    screenHeight: 0,
    statusBarHeight: app.statusBarHeight + 'px',
    navigationBarHeight: (app.statusBarHeight + 44) + 'px',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      wx.getSystemInfo({
        success: (res) => {
          // console.log(res.screenHeight)
          this.setData({
            screenHeight: res.screenHeight
          })
        }
      })
      setInterval(() => {
        this.toggleLogo()
      }, 200)
    },

  },
  methods: {
    //切换logo的方法
    toggleLogo() {
      const query = wx.createSelectorQuery().in(this);
      query.select('#logoScroll').boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec((res) => {
        // res[0].top // #the-id节点的上边界坐标
        res[1].scrollTop // 显示区域的竖直滚动位置
        // console.log(res, "--------------获取logo高度-----------------")
        var scrollTop = res[1].scrollTop
        //  console.log( scrollTop>this.data.scrollTop)   
        if (scrollTop > this.data.scrollTop || scrollTop < this.data.scrollTop) {
          var scrollDir = scrollTop > this.data.scrollTop ? 'down' : 'up'
          if (scrollTop < 200) {
            scrollDir = ""
          }
          this.setData({
            scrollDir,
            scrollTop,
          })
          // console.log(this.data.scrollDir)
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  /**
   * 页面滚动函数
   */
  onPageScroll(e) {
    this.checkScroll()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
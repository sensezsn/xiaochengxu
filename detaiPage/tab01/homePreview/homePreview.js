// pages/1/1.js
const app = getApp();
const navigationBarHeight = (getApp().statusBarHeight + 44) + 'px'
const os = wx.getSystemInfoSync()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tittle:'超哥的主页',
    current: app.globalData.current, //获取current
    navigationBarHeight, //获取padding值得
    loading: true
  },
  toArticle(e) {
    var url = '/detaiPage/tab01/articleDetail/articleDetail'
    wx.navigateTo({
      url: url
    })
  },
  toHomePage(e){
    wx.switchTab({
      url: '/pages/tab-01/tab-01',
    })
  },
  toImgDetai() {
    var url = '/detaiPage/tab01/imgDetail/imgDetail'
    wx.navigateTo({
      url: url
    })
  },
  /**
    * 生命周期函数--监听页面初次渲染完成
    */
  onReady: function () {

  },

  /**
   * 每个页面切换索引值状态
   */
  onShow: function () {

    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
    setTimeout(() => {
      this.setData({
        loading: false
      })
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      loading: true
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // var current = getApp().globalData.current;
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
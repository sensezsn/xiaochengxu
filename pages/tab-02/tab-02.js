// pages/1/1.js
const app = getApp();
const os = wx.getSystemInfoSync()
const navigationBarHeight = (getApp().statusBarHeight + 44) + 'px'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0,
    tittle:'任务',
    current: app.globalData.current, //获取current
    loading: true,
    os: wx.getSystemInfoSync(),
    navigationBarHeight, //获取padding值得"
  },
  toDetai1(){
    wx.navigateTo({
      url: "/detaiPage/tab02/drainage/drainage"
    })
  },
  toDetail2(){
    wx.navigateTo({
      url: "/detaiPage/tab02/orderList/orderList"
    })
  },
  toDetail3(){
    wx.navigateTo({
      url: "/detaiPage/tab02/payDetail/payDetail"
    })
  },
  toDetail4(){
    wx.navigateTo({
      url: "/detaiPage/tab02/redDetail/redDetail"
    })
  },
  toDetail5(){
    wx.navigateTo({
      url: "/detaiPage/tab02/vipDetail/vipDetail"
    })
  },
  selectTab(e){
    var selected = e.currentTarget.dataset.index;
    console.log(selected)
    this.setData({
      tabIndex: selected
    })
  },
  sendNew(e){
    wx.navigateTo({
      url: "/detaiPage/tab02/sendRedPPaper/sendRedPPaper"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.getTabBar().setData({
      selected: 1
    });
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

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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
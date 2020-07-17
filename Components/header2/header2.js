
const app = getApp();

Component({
  properties: {
    tittle: {
      type: String,
      value: '首页'
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    navigationBarTitle: '客户',
    statusBarHeight: app.statusBarHeight + 'px',
    navigationBarHeight: (app.statusBarHeight + 44) + 'px'
  },

  methods: {

    /**
      * 二维码扫描
      */
    bindScanCode: function () {
      var that = this;
      // 允许从相机和相册扫码
      wx.scanCode({
        success: (res) => {
          // 小程序码
          // if (res.scanType == 'WX_CODE') {
          //   let path = this.getQueryVariable(res.path, 'path')
          //   for (let item of vehicles) {
          //     if (item.url == path) {
          //       app.globalData.current = item
          //       wx.switchTab({
          //         url: '/pages/tab-01/tab-01'
          //       })
          //       break
          //     }
          //   }
          // }
          // 二维码
          if (res.scanType == 'QR_CODE') {
            // todo
          }
        },
        fail: (res) => {
          wx.showToast({
            title: '扫码失败，请稍后再试',
            icon: 'none',
            duration: 2000
          })
        }
      })
    },
  
  }
})

const app = getApp();
Component({
  data: {
    selected: 0, //当前tabBar页面
    color: "#B7BCBE", //未选中tabBar时的文字颜色
    selectedColor: "#10cbd2", //选中时tabBar文字颜色
    // tabBar对象集合
    list: [{
      pagePath: "/pages/tab-01/tab-01",
      iconPath: "/image/icon/zhuye-no.png",
      selectedIconPath: "/image/icon/zhuye.png",
      text: "主页"
    },
    {
      pagePath: "/pages/tab-02/tab-02",
      iconPath: "/image/icon/renwu-no.png",
      selectedIconPath: "/image/icon/renwu.png",
      text: "任务"
    },
    {
      pagePath: "/pages/tab-03/tab-03",
      iconPath: "/image/icon/kehu-no.png",
      selectedIconPath: "/image/icon/kehu.png",
      text: "客户"
    },
    {
      pagePath: "/pages/tab-04/tab-04",
      iconPath: "/image/icon/shouyi-no.png",
      selectedIconPath: "/image/icon/shouyi.png",
      text: "收益"
    },
    {
      pagePath: "/pages/VehicleOverview/VehicleOverview",
      iconPath: "/image/icon/xiaoxi.png",
      selectedIconPath: "/image/icon/xiaoxi.png",
      text: "消息"
    }]
  },

  methods: {
    // tabBar切换事件
    tab_bar_index(e) {
      var selected = e.currentTarget.dataset.index;
      getApp().globalData.selected = selected;
      var url = e.currentTarget.dataset.path
      wx.switchTab({
        url
      })
    }
  }
})
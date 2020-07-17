// template/shareBottom/shareBottom.js
const app = getApp();

Component({
  properties: {
    showToMe: {
      type: Boolean,
      value: true
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


  }
})

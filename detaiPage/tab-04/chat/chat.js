

const app = getApp();
const navigationBarHeight = (getApp().statusBarHeight + 44) + 'px'
/**
 * 聊天页面
 */
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navigationBarHeight, 
        tittle:'保险顾问超哥',
        textMessage: '',
        chatItems: [{
            name:'12',
            msa:'hello'
        },{
            name:'莉莉',
            msa:'me too'
        }],
        latestPlayVoicePath: '',
        chatStatue: 'open',
        extraArr: [{
            picName: 'choose_picture',
            description: '照片'
        }, {
            picName: 'take_photos',
            description: '拍摄'
        }, {
            picName: 'close_chat',
            description: '自定义功能'
        }],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

      
    },
    onReady() {
    },
    onSendMessageEvent(e) {
    
    },
    onVoiceRecordEvent(e) {
     
    },
  
    onExtraItemClickEvent(e) {
       
    },
  
  

    onUnload() {
    }

});

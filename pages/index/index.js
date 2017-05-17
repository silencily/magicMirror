//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

  },
  //事件处理函数
  bindViewCamera: function () {
    console.log('in click');
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['camera'], // 可以指定来源是相机
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var photoPath = res.tempFilePaths
        console.log(photoPath);
        wx.navigateTo({
          url: '/pages/photo/photo?photoPath=' + photoPath
        })
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
  },
  onShareAppMessage: function () {
    return {
      title: '是人是妖？拿出照妖镜来照照！',
      path: '/pages/index/index'
    }
  }
})

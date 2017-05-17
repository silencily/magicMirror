//photo.js
Page({
  data: {
  },
  onLoad: function (options) {
    var photoPath = options.photoPath;
    console.log(photoPath);
    this.setData({photo:photoPath});
  },
  bindViewPro: function () {
    wx.navigateTo({
      url: '/pages/tphoto/tphoto',
    })
    
  },
  bindViewCancel: function () {
    wx.navigateBack({
      delta:1
    })
  }
})

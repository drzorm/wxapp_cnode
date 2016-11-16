var api = require('../../api/api');
var app = getApp();
// app.globalData
Page({
  data: {
    topics: [],
    limit: 20,
    loading: false
  },
  onLoad: function() {

    this.fetchData();

  },
  onReady: function() {
    console.log('onReady');

  },
  onShow: function() {
    console.log('onShow');

  },
  onHide: function() {
    console.log('onHide');

  },
  onUnload: function() {
    console.log('onUnload');

  },
  onPullDownRefresh: function() {
    console.log('onPullDownRefresh');
    this.fetchData(true);

  },
  onReachBottom: function() {

    console.log('onReachBottom');
    this.fetchData();

  },
  fetchData: function(isRefresh) {
    var self = this;
    if (self.data.loading) return;
    self.setData({
      loading: true
    });
    var topics = isRefresh ? [] : self.data.topics;
    var page = isRefresh ? 1 : Math.ceil(topics.length / self.data.limit) + 1;
    api.topic.getTopics({
      page: page,
      limit: self.data.limit
    }).then(function(res) {

      var data = res.data;
      topics = topics.concat(data.data)
      data.success && self.setData({
        topics: topics,
        loading: false
      });
      isRefresh && wx.stopPullDownRefresh();
      console.log(self.data.topics);

    }, function(res) {
      self.setData({
        loading: false
      });
      isRefresh && wx.stopPullDownRefresh();
    });
  },
  //事件处理函数
  bindViewTap: function() {},
})

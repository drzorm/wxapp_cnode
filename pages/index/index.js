var api = require('../../api/api');
var app = getApp();
// app.globalData
Page({
  data: {
    topics: [],
    limit: 10,
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

  },
  onReachBottom: function() {

    console.log('onReachBottom');
    this.fetchData();

  },
  fetchData: function(){
    var self = this;
    if (self.data.loading) return;
    self.setData({
      loading: true
    });
    var topics = self.data.topics || [];
    var page = Math.ceil(topics.length / self.data.limit) + 1;
    api.topic.getTopics({ limit: self.data.limit })
      .then(function(res) {

        var data = res.data;
        topics =  topics.concat(data.data)
        data.success && self.setData({
          topics: topics,
          loading: false
        })
        console.log(self.data.topics);
      }, function(res) {
        self.setData({
          loading: false
        })
      });
  },
  //事件处理函数
  bindViewTap: function() {},
})

var api = require('../../api/api');
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();
// app.globalData
Page({
  data: {
    topic: {},
    wxParseData: []
  },
  onLoad: function(options) {
    if(typeof options.id === undefined) return;
    this.fetchData(options.id);
  },
  fetchData: function(id) {
    var self = this;
    if (self.data.loading) return;
    api.topic.getTopic({
      id: id,
      mdrender: true
    }).then(function(res) {

      var data = res.data;
      data.success && self.setData({
        topic: data.data,
      });

      WxParse.wxParse('html', data.data.content, self);

    }, function(res) {

    });
  },
  wxParseImgTap: function(e) {
    var self = this;
    WxParse.wxParseImgTap(e, self);
  }
})

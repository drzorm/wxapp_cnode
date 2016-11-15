var api = require('../../api/api');
var app = getApp();
Page({
    data: {
        topics: []
    },
    //事件处理函数
    bindViewTap: function () { },
    onLoad: function () {
        var that = this;
        var _d = {
            "id": "581b0c4ebb9452c9052e7acb",
            "author_id": "5110f2bedf9e9fcc584e4677",
            "tab": "share",
            "content": "内容",
            "title": "《一起学 Node.js》彻底重写完毕",
            "last_reply_at": "2016-11-11T09:44:33.692Z",
            "good": false,
            "top": true,
            "reply_count": 54,
            "visit_count": 4669,
            "create_at": "2016-11-03T10:07:10.155Z",
            "author": {
                "loginname": "nswbmw",
                "avatar_url": "https://avatars.githubusercontent.com/u/4279697?v=3&s=120"
            }
        }
        // console.log(api)
        api.topic.getTopics()
            .then(function (res) {
                console.log(res);
            }, function (res) {
                console.log(res);
            });
    }
})

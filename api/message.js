var request = require('../utils/util').request;
var baseApiUrl = require('../config/api').baseApiUrl;
var renderApiUrl = require('../config/api').renderApiUrl;

/**
 * [count 获取未读消息数]
 * @param  {[String]} accesstoken [description]
 * @return {[Promise]}             [description]
 */
function count(accesstoken) {
  var promise = new Promise(function(resolve, reject) {
    request({
      method: 'GET',
      data: {
        accesstoken: accesstoken
      },
      url: renderApiUrl('/message/count'),
    }).then(function(res) {
      resolve(res);
    }, function(res) {
      reject(res);
    });
  });
  return promise;
}

/**
 * [messages 获取已读和未读消息]
 * @param  {[String]} accesstoken [description]
 * @return {[Promise]}             [description]
 */
function messages(accesstoken) {
  var promise = new Promise(function(resolve, reject) {
    request({
      method: 'GET',
      data: {
        accesstoken: accesstoken,
        mdrender: true
      },
      url: renderApiUrl('/messages')
    }).then(function(res) {
      resolve(res);
    }, function(res) {
      reject(res);
    });
  });
  return promise;
}

/**
 * [markAll 标记全部已读]
 * @param  {[String]} accesstoken [description]
 * @return {[Promise]}             [description]
 */
function markAll(accesstoken) {
  var promise = new Promise(function(resolve, reject) {
    request({
      method: 'POST',
      data: {
        accesstoken: accesstoken
      },
      url: renderApiUrl('/message/mark_all'),
    }).then(function(res) {
      resolve(res);
    }, function(res) {
      reject(res);
    });
  });
  return promise;
}


module.exports = {
  count: count,
  messages: messages,
  markAll: markAll,
}

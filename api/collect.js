var request = require('../utils/util').request;
var baseApiUrl = require('../config/api').baseApiUrl;
var renderApiUrl = require('../config/api').renderApiUrl;

/**
 * [addTopic 收藏主题]
 * @param {[String]} options.accesstoken [description]
 * @param {String} options.topic_id    }            [description]
 * @return {[Promise]}           [description]
 */
function collect({ accesstoken, topic_id } = {}) {
  var promise = new Promise(function(resolve, reject) {
    request({
      method: 'POST',
      data: {
        accesstoken: accesstoken,
        title: title,
        tab: tab,
        content: content
      },
      url: renderApiUrl('/topic_collect/collect'),
    }).then(function(res) {
      resolve(res);
    }, function(res) {
      reject(res);
    });
  });
  return promise;
}

/**
 * [addTopic 取消主题]
 * @param {[type]} String.accesstoken [description]
 * @param {String} options.topic_id    }            [description]
 * @return {[Promise]}           [description]
 */
function deCollect({ accesstoken, topic_id } = {}) {
  var promise = new Promise(function(resolve, reject) {
    request({
      method: 'POST',
      data: {
        accesstoken: accesstoken,
        title: title,
        tab: tab,
        content: content
      },
      url: renderApiUrl('/topic_collect/de_collect'),
    }).then(function(res) {
      resolve(res);
    }, function(res) {
      reject(res);
    });
  });
  return promise;
}

/**
 * [userCollect 用户所收藏的主题]
 * @param  {[String]} loginname [用户名]
 * @return {[Promise]}           [description]
 */
function userCollect(loginname) {
  var promise = new Promise(function(resolve, reject) {
    request({
      method: 'GET',
      url: renderApiUrl('/topic_collect/' + loginname),
    }).then(function(res) {
      resolve(res);
    }, function(res) {
      reject(res);
    });
  });
  return promise;
}

module.exports = {
  collect: collect,
  deCollect: deCollect,
  userCollect: userCollect,
}

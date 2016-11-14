
var request = require('../utils/util').request;
var baseApiUrl = require('../config/api').baseApiUrl;
var renderApiUrl = require('../config/api').renderApiUrl;

var getTopics = function ({page = 1, limit = 20, tab = 'all'} = {}) {
  var promise = new Promise(function (resolve, reject) {
    request({
      data: {
        page: page,
        limit: limit,
        tab: tab,
      },
      url: renderApiUrl('/topics'),
    }).then(function (res) {
      resolve(res);
    }, function (res) {
      reject(res);
    })
  });
  return promise;
}


module.exports = {
  getTopics: getTopics
}

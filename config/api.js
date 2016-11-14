var baseApiUrl = 'https://cnodejs.org/api/v1';
var renderApiUrl = function(url) {
    return baseApiUrl + url;
}
module.exports = {
    baseApiUrl: baseApiUrl,
    renderApiUrl: renderApiUrl
}

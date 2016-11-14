function request(options) {
    var opts = Object.assign({
        method: 'GET',
        header: {
            'Content-Type': 'application/json'
        },
        showLoading: true,
        showFailMsg: true
    }, options);
    var promise = new Promise(function (resolve, reject) {
        opts.success = function (res) {
            resolve(res);
        }
        opts.fail = function (res) {
            opts.showFailMsg && wx.showToast({
                title: '请求失败',
                icon: 'warn',
                duration: 10000
            });
            reject(res);
        }
        opts.complete = function () {
            opts.showLoading && wx.hideToast();
            typeof options.complete === 'function' && options.complete(res);
        }
        opts.showLoading && wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 100000
        });
        wx.request(opts);
    });

    return promise;

}

function formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()


    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

module.exports = {
    request: request,
    formatTime: formatTime
}

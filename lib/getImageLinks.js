const request = require("request"),
    vm = require("vm");
var frontends = null;

function galleryIdToSubdomain(id, callback) {
    return callback(null, 'a');
}

function getFrontendCount(callback) {
    if (frontends) {
        callback(null, frontends);
    } else {
        request('https://hitomi.la/download.js', function (err, res, body) {
            if (err)
                return callback(err);
            var pattern = /number_of_frontends\s?=\s?([0-9]+)/mg;
            var count = pattern.exec(body)[1];
            frontends = count;
            return callback(null, count);
        });
    }
}

function generateImageLink(id, subdomain) {
    return function (v) {
        v.url = `https://${subdomain}.hitomi.la/galleries/${id}/${v.name}`;
        return v;
    }
}

module.exports = function (id, callback) {
    request(`https://hitomi.la/galleries/${id}.js`, function (err, res, body) {
        if (err)
            callback(err, null);
        var sandbox = {};
        vm.runInNewContext(body, sandbox);
        galleryIdToSubdomain(id, function(err, subdomain) {
            if (err)
                return callback(err, null);
            result = sandbox.galleryinfo.map(generateImageLink(id, subdomain)) // makes image url
            return callback(null, result);
        });
    })
}
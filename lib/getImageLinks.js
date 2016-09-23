const request = require("request");

function generateImageLink(id) {
    return function(v) {
        v.url = `https://i.hitomi.la/galleries/${id}/${v.name}`;
        return v;
    }
}
module.exports = function(id, callback) {
    request(`https://hitomi.la/galleries/${id}.js`, function(err, res, body) {
        if (err)
            callback(err, null);
        var pattern = /(var galleryinfo\s?=\s?)/gmi;
        var strStart = body.search(pattern);
        strStart += pattern.exec(body)[0].length;
        var result = JSON.parse(body.substring(strStart)) // var galleryinfo= ....
        result = result.map(generateImageLink(id)) // makes image url
        callback(null, result);
    })
}
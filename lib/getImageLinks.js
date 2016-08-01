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
        var result = JSON.parse(body.substring(16)) // var galleryinfo= ....
        result = result.map(generateImageLink(id)) // makes image url
        callback(null, result);
    })
}
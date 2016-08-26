const request = require("request"),
    async = require("async"),
    debug = require("debug")("hitomi.la");
const highThis = this;
const renameMap = {
    "a": "artists",
    "g": "groups",
    "p": "parodies",
    "t": "tags",
    "c": "characters",
    "l": "language",
    "n": "name"
};

function getJSONCount(callback) {
    request('https://hitomi.la/searchlib.js', function(err, res, body) {
        if (err)
            return callback(err, null);
        var pattern = /number_of_gallery_jsons=([0-9]+)/mg;
        var count = pattern.exec(body)[1];
        callback(null, count);
    })
}

function downloadJSON(no, callback) {
    debug(`download gallery chunk, ${no}st`);
    request(`https://hitomi.la/galleries${no}.json`, function(err, res, body) {
        if (err) {
            return callback(err);
        } else if (res.statusCode == 400) {
            return callback(new Error("Gallery chunk not found"));
        } else if (res.statusCode == 200 || res.statusCode == 304) {
            debug(`downloaded ${no}st gallery chunk`);
            return callback(null, body);
        } else {
            debug("Unexcepted Status Code " + res.statusCode);
            debug("Response body : " + body);
            return callback(new Error("Unexcepted Status Code " + res.statusCode));
        }
    })
}

function renameProperties(v) {
    var renameTargets = Object.keys(renameMap);
    for (var renameTarget of renameTargets) {
        if (typeof v[renameTarget] !== "undefined") {
            v[renameMap[renameTarget]] = v[renameTarget];
            delete v[renameTarget];
        }
    }
    return v;
}

module.exports = function(callback) {
    getJSONCount(function(err, count) {
        if (err)
            throw err;
        debug("JSON Count : " + count);
        var jsonTexts = [];
        for (var i = 0; i < count; i++) {
            jsonTexts.push(i);
        }
        async.map(jsonTexts, downloadJSON, function(err, jsonTexts) {
            if (err)
                return callback(err, null);
            var result = [];
            for (var jsonText of jsonTexts) {
                debug("parsing gallery chunks....");
                result = result.concat(JSON.parse(jsonText));
            }
            debug("renaming property names");
            result = result.map(renameProperties);
            debug("getting gallery list completed, total " + result.length + " galleries");
            return callback(null, result);
        })
    });
}
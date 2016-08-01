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

function recursiveDownload(callback, count, results) {
    if (typeof count === "undefined")
        var count = 0;
    if (typeof results === "undefined")
        var results = [];
    var url = `https://hitomi.la/galleries${count++}.json`;
    debug("downloading gallery list, " + count + "st json download started");
    request(url, function(error, response, body) {
        if (error)
            return callback(error, null);
        if (response.statusCode == 404) {
            // download completed
            debug("gallery list downloaded completely");
            return callback(null, results);
        } else if (response.statusCode == 200 || response.statusCode == 304) {
            debug("downloading gallery list, " + count + "st json download completed");
            // download in progress
            results.push(body);
            setImmediate(function() {
                recursiveDownload(callback, count, results);
            });
        } else {
            // some error happened.
            debug("downloading gallery list, Unexcepted HTTP Status Code, " + response.statusCode);
            var httpError = new Error("Unexcepted HTTP Status Code " + response.statusCode);
            httpError.name = "UnexceptedHttpStatusCodeError";
            httpError.responseBody = body;
            return callback(httpError, null);
        }
    });
}

function renameProperties(v){
    var renameTargets = Object.keys(renameMap);
    for(var renameTarget of renameTargets) {
        if(typeof v[renameTarget] !== "undefined") {
            v[renameMap[renameTarget]] = v[renameTarget];
            delete v[renameTarget];
        }
    }
    return v;
}

module.exports = function(callback) {
    debug("getting gallery list started");
    recursiveDownload(function(err, jsonTexts) {
        if (err)
            return callback(err, null);
        var result = [];
        for (var jsonText of jsonTexts) {
            debug("parsing gallery list, parsing json text....");
            result = result.concat(JSON.parse(jsonText));
        }
        debug("renaming property names");
        result = result.map(renameProperties);
        debug("getting gallery list completed, " + result.length + " galleries");
        return callback(null, result);
    })
}
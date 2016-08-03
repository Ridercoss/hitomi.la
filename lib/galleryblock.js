const request = require("request");
let cheerio = require('cheerio')

function httpStatusError(code){
    var err = new Error("HTTP Status Code " + code);
    err.name = "HttpStatusError";
    err.statusCode = code;
    return err;
}
module.exports = function(id, callback) {
    request(`https://hitomi.la/galleryblock/${id}.html`, function(err, res, body) {
        if(err)
            return callback(err, null);
        if(res.statusCode != 200 && res.statusCode != 304)
            return callback(http404Error(404), null);
        
        var result = {};
        var $ = cheerio.load(body);

        result.artists = [];
        // title
        result.title = $("h1 > a").text();
        // artists 
        $(".artist-list ul li a").each(function(e){
            result.artists.push(e.text());
        })
        // series
        $(".dj-desc tr").each(function(e, i){
            // index 0 : parody
            // index 1 : type
            // index 2 : language
            // index 3 : tags
            switch(i) {
                case 0:

                case 1:

                case 2:

                case 3:
            }
        })
    });
}
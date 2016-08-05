const request = require("request"),
    cheerio = require('cheerio')

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
            return callback(httpStatusError(404), null);
        
        var result = {};
        var $ = cheerio.load(body);

        result.id = id;
        result.artists = [];
        result.parodies = [];
        result.language = [];
        result.tags = [];
        // title
        result.title = $("h1 > a").text();
        // artists 
        $(".artist-list ul li a").each(function(i, e){
            result.artists.push($(e).text());
        })
        // series
        $(".dj-desc tr").each(function(i){
            // index 0 : parody
            // index 1 : type
            // index 2 : language
            // index 3 : tags
            var e = $(this);
            if(e.find("a[href]").length == 0)
                return; // N/A
            switch(i) {
                case 0:
                    e.find("li a[href]").each(function(){
                        result.parodies.push($(this).text().toLowerCase());
                    })
                    break;
                case 1:
                    result.type = e.find("td a[href]").first().text().replace(/ /g,"").toLowerCase()
                    break;
                case 2:
                    e.find("td a[href]").each(function(i, e){
                        result.language.push($(e).text());
                    });
                    break;
                case 3:
                    e.find(".relatedtags a[href]").each(function(){
                        var tagName = $(this).text().trim();
                        var href = $(this).attr('href');
                        if(href.indexOf("/tag/male") == 0 || href.indexOf("/tag/female") == 0)
                            tagName = tagName.substring(0, tagName.length - 2);
                        result.tags.push(tagName);
                    })
            }
        });
        callback(null, result);
    });
}
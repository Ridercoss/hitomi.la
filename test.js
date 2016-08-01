const hitomi = require("./index.js"),
    util = require("util");

// Test: Get list
hitomi.list(function(err, list) {
    if (err)
        throw err;
    console.log("Callback! I got " + list.length + " galleries!");
    var item = {},
        propCount = -1;
    for (var gallery of list) {
        var propCount_now = Object.keys(gallery).length;
        if (propCount < propCount_now) {
            propCount = propCount_now;
            item = gallery;
        }
    }
    console.log(util.inspect(item, {
        depth: null,
        colors: true
    }));
    // excpeted property names:
    // id, type, artists, groups, parodies, tags, characters, language, name
})

// Test : Get image links
hitomi.imageLinks(960795, function(err, links) {
    if (err)
        throw err;
    console.log(util.inspect(links, {
        depth: null,
        colors: true
    }));
    // excpeted property names:
    // width, height, name, url
    // name is image name, url is image direct link.
})
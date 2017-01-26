exports.parseQuery = function (q, callback) {
    let result = [];
    let splitted = q.split(' ');
    for (var i of splitted) {
        if (i.indexOf(':') == -1)
            continue;
        let negative = false;
        if (i.startsWith('-')) {
            negative = true;
            i = i.substring(1);
        }
        let parts = i.split(':');
        let namespace = parts[0].trim().toLowerCase(),
            cond = parts[1].trim();
        if (namespace == 'female' || namespace == 'male') {
            cond = `${namespace}:${cond}`;
            namespace = 'tag';
        }
        if (namespace == 'series' || namespace == 'parody') {
            namespace = 'parodies';
        }
        if (['artist', 'group', 'tag', 'character'].indexOf(namespace) != -1) {
            namespace += 's';
        }
        cond = cond.replace(/_/g, ' ');
        result.push({
            type: 'equalOrContains',
            caseSensitive: false,
            negative: negative,
            key: namespace,
            value: cond
        });
    }
    return result;
}
exports.runQuery = function (query, list, callback) {
    var result = list;
    for (var i of query) {
        result = result.filter(function (j) {
            let testPassed = false;
            let queryVal = i.value, testTarget = j[i.key];
            if(!i.caseSensitive) {
                queryVal = queryVal.toLowerCase();
                testTarget = testTarget.constructor.name === "Array" ? testTarget.map((i) => {return i.toLowerCase();}) : (testTarget.toLowerCase ? testTarget.toLowerCase() : testTarget);
            }
            if (testTarget === null || typeof testTarget === "undefined") {
                testPassed = false;
            } else if (i.type == 'contains') {
                testPassed = testTarget.indexOf(queryVal) != -1;
            } else if (i.type == "equalOrContains") {
                testPassed = (testTarget.constructor.name === "Array" && testTarget.indexOf(queryVal) != -1) || testTarget === queryVal;
            } else if (i.type == "regex") {
                testPassed = (testTarget.constructor.name === "Array" && testTarget.some((k) => {return queryVal.test(k);})) || queryVal.test(testTarget);
            } else {
                throw new Error("Unknown type");
            }
            if (i.negative) {
                testPassed = !testPassed;
            }
            return testPassed;
        });
    }
    return result;
}
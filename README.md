# What is this?
get full gallery list of [hitomi.la](https://hitomi.la) and get download links of specified gallery.

# Install

```
npm install --save hitomi.la
```

## Document
### list(callback)
get full gallery list. look at this example.
```js
const hitomi = require('hitomi.la');
hitomi.list(function(err, list) {
    if (err)
        throw err;
    console.log("Total " + list.length + " galleries!");
})
```

below is example of list object
```js
[
    {
        "id":976139,
        "type":"doujinshi",
        "artists":["miho rei"],
        "tags":["female:blindfold","female:milf","male:glasses"],
        "language":"japanese",
        "name":"人妻がセックスする本"
    },
    {
        "id":976136,
        "type":"doujinshi",
        "artists":["miho rei"],
        "language":"japanese",
        "name":"人妻がフェラする本"
    },
    {
        "type":"doujinshi",
        "id":976074,
        "artists":["mikaduki neko"],
        "groups":["ameshoo"],
        "parodies":["touhou project"],
        "tags":["female:bunny girl","female:loli"],
        "characters":["tewi inaba"],
        "language":"korean",
        "name":"Touhou TS monogatari ~ Tewi-hen ~"
    },
    // and more galleries....
]
```

### imageLinks(id, callback)
get image links, height, width, urls. look at this example
```js
const hitomi = require('hitomi.la')
hitomi.imageLinks(960795, function(err, links) {
    if (err)
        throw err;
    console.log(util.inspect(links, {
        depth: null,
        colors: true
    }));
})
```

Output
```js
[ { height: 300,
    name: 'Cherry_Jam_001.jpg',
    width: 224,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_001.jpg' },
  { width: 224,
    height: 300,
    name: 'Cherry_Jam_002.jpg',
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_002.jpg' },
  { width: 225,
    height: 300,
    name: 'Cherry_Jam_003.jpg',
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_003.jpg' },
  { name: 'Cherry_Jam_004.jpg',
    height: 300,
    width: 225,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_004.jpg' },
  { width: 225,
    height: 300,
    name: 'Cherry_Jam_005.jpg',
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_005.jpg' },
  { name: 'Cherry_Jam_006.jpg',
    height: 300,
    width: 225,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_006.jpg' },
  { height: 300,
    name: 'Cherry_Jam_007.jpg',
    width: 224,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_007.jpg' },
  { height: 300,
    name: 'Cherry_Jam_008.jpg',
    width: 224,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_008.jpg' },
  { width: 226,
    height: 300,
    name: 'Cherry_Jam_009.jpg',
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_009.jpg' },
  { width: 226,
    height: 300,
    name: 'Cherry_Jam_010.jpg',
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_010.jpg' },
  { width: 225,
    name: 'Cherry_Jam_011.jpg',
    height: 300,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_011.jpg' },
  { height: 300,
    name: 'Cherry_Jam_012.jpg',
    width: 225,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_012.jpg' },
  { height: 300,
    name: 'Cherry_Jam_013.jpg',
    width: 224,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_013.jpg' },
  { height: 300,
    name: 'Cherry_Jam_014.jpg',
    width: 224,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_014.jpg' },
  { height: 300,
    name: 'Cherry_Jam_015.jpg',
    width: 226,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_015.jpg' },
  { name: 'Cherry_Jam_016.jpg',
    height: 300,
    width: 226,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_016.jpg' },
  { width: 224,
    height: 300,
    name: 'Cherry_Jam_017.jpg',
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_017.jpg' },
  { height: 300,
    name: 'Cherry_Jam_018.jpg',
    width: 224,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_018.jpg' },
  { width: 225,
    height: 300,
    name: 'Cherry_Jam_019.jpg',
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_019.jpg' },
  { width: 225,
    height: 300,
    name: 'Cherry_Jam_020.jpg',
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_020.jpg' },
  { height: 300,
    name: 'Cherry_Jam_021.jpg',
    width: 225,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_021.jpg' },
  { width: 225,
    name: 'Cherry_Jam_022.jpg',
    height: 300,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_022.jpg' },
  { width: 231,
    height: 300,
    name: 'Cherry_Jam_023.jpg',
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_023.jpg' },
  { width: 231,
    name: 'Cherry_Jam_024.jpg',
    height: 300,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_024.jpg' },
  { width: 225,
    name: 'Cherry_Jam_025.jpg',
    height: 300,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_025.jpg' },
  { height: 300,
    name: 'Cherry_Jam_026.jpg',
    width: 225,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_026.jpg' },
  { width: 230,
    name: 'Cherry_Jam_027.jpg',
    height: 300,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_027.jpg' },
  { width: 230,
    name: 'Cherry_Jam_028.jpg',
    height: 300,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_028.jpg' },
  { width: 225,
    name: 'Cherry_Jam_029.jpg',
    height: 300,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_029.jpg' },
  { width: 225,
    name: 'Cherry_Jam_030.jpg',
    height: 300,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_030.jpg' },
  { width: 225,
    height: 300,
    name: 'Cherry_Jam_031.jpg',
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_031.jpg' },
  { height: 300,
    name: 'Cherry_Jam_032.jpg',
    width: 225,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_032.jpg' },
  { width: 224,
    name: 'Cherry_Jam_033.jpg',
    height: 300,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_033.jpg' },
  { width: 224,
    height: 300,
    name: 'Cherry_Jam_034.jpg',
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_034.jpg' },
  { height: 300,
    name: 'Cherry_Jam_035.jpg',
    width: 225,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_035.jpg' },
  { width: 225,
    height: 300,
    name: 'Cherry_Jam_036.jpg',
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_036.jpg' },
  { name: 'Cherry_Jam_037.jpg',
    height: 300,
    width: 226,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_037.jpg' },
  { width: 226,
    height: 300,
    name: 'Cherry_Jam_038.jpg',
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_038.jpg' },
  { name: 'Cherry_Jam_039.jpg',
    height: 300,
    width: 225,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_039.jpg' },
  { width: 225,
    name: 'Cherry_Jam_040.jpg',
    height: 300,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_040.jpg' },
  { width: 225,
    name: 'Cherry_Jam_041.jpg',
    height: 300,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_041.jpg' },
  { name: 'Cherry_Jam_042.jpg',
    height: 300,
    width: 225,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_042.jpg' },
  { width: 225,
    height: 300,
    name: 'Cherry_Jam_043.jpg',
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_043.jpg' },
  { width: 225,
    name: 'Cherry_Jam_044.jpg',
    height: 300,
    url: 'https://i.hitomi.la/galleries/960795/Cherry_Jam_044.jpg' } ]
```

### Search
#### search.parseQuery(query)
parses query, this function is not async function, and returns array of object.

This is code example
```js
const hitomi = require('hitomi.la');
let parsedQuery = hitomi.search.parseQuery('artist:somebody language:english -tags:someTag series:something');
console.log(parsedQuery);
```

#### search.runQuery(queryObj, list)
search the list, this is not async func.
queryObj should be result of `search.parseQuery(query)`.
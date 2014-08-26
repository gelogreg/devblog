/************************************************************\
| COMMON TOOLS:                                              |
| * GET - function caches responses to GET_CACHE             |
\************************************************************/
var GET_CACHE = {};
var GET = function(url) {
    if(!GET_CACHE[url]) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function () { GET_CACHE[url] = this.responseText; };
        xhr.send();
    }
};

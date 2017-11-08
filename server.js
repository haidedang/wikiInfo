var http = require('http');
var app = require('./app');
var infobox = require ('wiki-infobox');
var wikiParser = require('wiki-infobox-parser');
var url = require('url');

var page = 'Albert Einstein';
var language = 'en';

//
// infobox(page, language, function(err, data) {
//     if (err) {
//         // Oh no! Something goes wrong!
//         console.log('Doesnt exist');
//         return;
//     }
//     console.log(data);
// });

var server = http.createServer(function(request, response){

    var path = url.parse(request.url).pathname;
    var path = path.substr(1);
    console.log(path);

    wikiParser(path, function(err, result) {
                if (err) {
                    console.error(err.message);
                } else {
                    response.end(result);
                }
            });

    // if(path === '/') {
    //     wikiParser('Eiffeltower', function(err, result) {
    //         if (err) {
    //             console.error(err.message);
    //         } else {
    //             response.end(result);
    //         }
    //     });
    // } else if (path === '/api'){
    //
    //     infobox(page, language, function(err, data) {
    //          if (err) {
    //             // Oh no! Something goes wrong!
    //             console.log('Doesnt exist');
    //             return;
    //             }
    //         console.log(data);
    //     });
    // }

});

server.listen(8000, '0.0.0.0');
console.log("Webservice running on port 8000");

// http.createServer(app.handleRequest).listen(8000);

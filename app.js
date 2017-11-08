var url = require('url');
var fs = require('fs');

function renderHTML(path,response) {
    fs.readFile(path, null, function(err, data){
        response.end(data);
    })
}

module.exports = {
    handleRequest : function(request,response) {
        response.writeHead(200, { 'Content-Type': 'text/html'});
        var path = url.parse(request.url).pathname; // URL Object , pathname property
        switch (path) {
            case '/':
                renderHTML('./index.html', response);
                break;
            case '/login':
                renderHTML('./login.html', response);
                break;
            default:
                response.writeHead(404);
                response.end('Route not defined');
        }
    }
}



var http = require('http');

var server = http.createServer(function (request, response) {
    
    const { headers, method, url } = request;
    var body = '<h1>Respuesta httpserver <br><br>localhost:8080</h1>';
    const responseCompleta = { headers, method, url, body };

    response.write(JSON.stringify(responseCompleta));
    response.end();
});
server.listen(8080);    
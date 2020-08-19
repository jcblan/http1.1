var http = require('http');


var options = {
  host: 'localhost',
  port: '8080',
  path: '/',
  headers: {"Connection": "keep-alive"}
};

callback = function(response) {
  var str = '';

  //unir partes de la respuesta
  response.on('data', function (info) {
    str += info;
  });

  //respuesta recibida
  response.on('end', function () {
    console.log(str);
  });
}
//enviar request
http.request(options, callback).end();
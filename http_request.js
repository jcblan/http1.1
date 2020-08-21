var http = require('http');
var agent = new http.Agent({ keepAlive: true });
agent.maxSockets = 1;


var options = {
  host: 'localhost',
  port: '8080',
  path: '/',
  agent: agent,
};

callback = function(response) {
  var str = '';

  //unir partes de la respuesta
  response.on('data', function (info) {
    str += info;
  });

  //respuesta recibida
  response.on('end', function () {
    console.log(response.headers);
    console.log(str);
  });
}
//"enviar" requests
http.request(options, callback).end();

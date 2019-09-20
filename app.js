const http = require('http');
const os = require('os');

var handler = function(request, response) {
	  response.writeHead(200);
	  response.end("Hi you! we are in the server " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);


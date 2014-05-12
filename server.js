var http = require('http');

// Definir la funcion que se envia al servidor
var onRequest = function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("hola Andres..");
    response.end();
}
// Crear el servidor
http.createServer(onRequest).listen(8888);

console.log("Server corriendo en http://localhost:8888/");
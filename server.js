var http    = require('http');
var url     = require('url');

function iniciar(route) {
    // Definir la funcion que se envia al servidor
    var onRequest = function(request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log("Petición recibida para : " + pathName);

        route(pathName);
        
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("hola Andres..");
        response.end();
    }
    // Crear el servidor
    http.createServer(onRequest).listen(8888);    
    console.log("Server corriendo en http://localhost:8888/");
}

exports.iniciar = iniciar;
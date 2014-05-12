var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("hola Andres..");
    res.end();
}).listen(8888);

console.log("Server corriendo en http://localhost:8888/");
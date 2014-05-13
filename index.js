var server          = require('./server');
var router          = require('./router');
var requestHandlers = require('./requestHandlers');

var handler = {
    '/': requestHandlers.iniciar,
    '/iniciar': requestHandlers.iniciar,
    '/subir': requestHandlers.subir
};


server.iniciar(router.route, handler);
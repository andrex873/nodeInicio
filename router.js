var route = function(handler, pathName) {

    if(typeof handler[pathName] === 'function'){
        return handler[pathName]();
    } else {
        console.log("No se encontro manipulador para " + pathName);
        return "404 No Encontrado";
    }

    console.log("A punto de rutear a " + pathName);
}

exports.route = route;
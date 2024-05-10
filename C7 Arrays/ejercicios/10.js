function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con 5 o más caracteres en el array.
  // Tu código:
  var string = undefined;
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string' && array[i].length > 5) {
        string = array[i];
        break;
    }
}
return string;
}

module.exports = obtenerPrimerStringLargo;

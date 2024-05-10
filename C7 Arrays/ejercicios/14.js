function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var cuenta = 0;
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' && array[i] > 10) {
        cuenta++;
    }
}
return cuenta;
}

module.exports = contarElementosMayoresA10;

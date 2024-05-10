function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var indiceMax = 0;
  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMax]) {
        indiceMax = i; // Actualiza el índice del número más grande
    }
}
return indiceMax;
}

module.exports = encontrarIndiceMayor;

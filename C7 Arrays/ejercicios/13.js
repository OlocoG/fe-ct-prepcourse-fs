function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var arrayPar = [];
  array.forEach(num => {
    if(num % 2 === 0)
      arrayPar.push(num)
  });
  return arrayPar;
}

module.exports = filtrarNumerosPares;

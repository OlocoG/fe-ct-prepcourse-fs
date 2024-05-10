function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  if (resultadosTest.length === 0) {
    return 0; // Si el arreglo está vacío, el promedio es 0
  }

var sumaNotas = resultadosTest.reduce((a, b) => a + b, 0);
return sumaNotas / resultadosTest.length;
}

module.exports = promedioResultadosTest;

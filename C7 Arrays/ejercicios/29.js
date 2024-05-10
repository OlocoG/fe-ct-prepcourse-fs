function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null; // Si el arreglo está vacío, retorna null
}

// Calcula la suma esperada de la secuencia completa
var sumaEsperada = (numeros.length + 1) * (numeros[0] + numeros[numeros.length - 1]) / 2;

// Calcula la suma de los números dados en el arreglo
var sumaArreglo = numeros.reduce((a, b) => a + b, 0);

// Compara las sumas para encontrar el número faltante
if (sumaEsperada === sumaArreglo) {
    return null; // Si no hay números faltantes, retorna null
} else {
    return Math.round(sumaEsperada - sumaArreglo); // Retorna el número faltante
}
}

module.exports = encontrarNumeroFaltante;
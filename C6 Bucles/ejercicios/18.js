function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var product = 1;
  for (var i = a; i <= b; i++) {
      product *= i;
      if(product === 0)
        return 0;
  }
  return product;
}

module.exports = productoEntreNúmeros;
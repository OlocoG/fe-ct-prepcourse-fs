function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  return (num >99 && num < 10000) ? true : false;
}

module.exports = tieneTresDigitos;

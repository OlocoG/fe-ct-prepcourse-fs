function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var porDos = array.map((elemento) => {
    return elemento*2;
  });
  return porDos;
}

module.exports = duplicarElementos;

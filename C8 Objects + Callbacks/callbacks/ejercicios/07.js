function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var conLetra = arrayOfStrings.filter(function(elemento){
      return elemento.charAt(0).toLowerCase() === 'a';
   });
   return conLetra;
}

module.exports = filter;

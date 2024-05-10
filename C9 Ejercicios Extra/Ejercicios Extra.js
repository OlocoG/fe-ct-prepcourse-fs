/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {//listo
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var arreglos = [];
  for(var clave in objeto)
    if(objeto.hasOwnProperty(clave)){//verificamos si la propiedad es del objeto mismo o heredada
      var arregloPar = [clave, objeto[clave]];//creamos un arreglo nuevo con la clave y el valor de esa clave

      arreglos.push(arregloPar);//agregamos el arreglo al arreglo padre
    }
    return arreglos;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var contador = {};
  string = string.toLowerCase();
  for(var i = 0; i < string.length; i++){
    var letra = string[i];// recorre el string y guarda cada letra
    if(contador[letra] === undefined)
      contador[letra] = 1;//si no esta en el objeto se inicializa con uno
    else
      contador[letra]++; // si ya esta en el objeto se incrementa
  } 
  var contadorOrdenado = {};
  Object.keys(contador).sort().forEach(function(key){
    contadorOrdenado[key] = contador[key];//ordena alfabeticamente las keys
  });
  return contadorOrdenado;
  }

function capToFront(string) {//listo
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var letras = string.split('');//separo el string en un arreglo 
  var mayus = letras.filter(function(caracter){//guarda las mayusculas
    return caracter === caracter.toUpperCase();
  });
  var minus = letras.filter(function(caracter){//guarda las minusculas
    return caracter === caracter.toLowerCase();
  });
  var mayusPrimero = mayus.join('') + minus.join('');//une los arreglos transformados en string
  return mayusPrimero;
}

function asAmirror(frase) {//listo
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var palabras = frase.split(' ');//separo la frase en un array de palabras
  var inver = palabras.map(function(palabra){
    return palabra.split('').reverse().join(''); //devuelve cada palabra dada vuelta
  });
  var nuevaFrase = inver.join(' ');// me une el arreglo con un espacio entre cada palabra
  return nuevaFrase;
}

function capicua(numero) {//listo
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var stringNumero = numero.toString();
  var numeroInvertido = stringNumero.split('').reverse().join('');
  if(stringNumero === numeroInvertido)
    return 'Es capicua';
  else
    return 'No es capicua';
}

function deleteAbc(string) {//listo
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var stringSinLetras = string.replace(/[abc]/g, '');
  return stringSinLetras;
}

function sortArray(arrayOfStrings) {//listo
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  var nuevoArreglo = arrayOfStrings.sort(function(a,b){
    return a.length - b.length;
  });
  return nuevoArreglo;
}

function buscoInterseccion(array1, array2) {//listo
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var conjunto = new Set(array1);//conjunto que almacena los elementos del primer arreglo
  var elementosComunes = [];
  for(var i = 0; i < array2.length; i++){
    var objeto = array2[i];
    if(conjunto.has(objeto))//verifica si el elemento esta presente en el conjunto 
      elementosComunes.push(objeto);  
  }
  return elementosComunes;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

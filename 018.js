/* Ejercicio 18: 
18.1 Convertir a Mayúsculas
Dada una cadena de texto en minúsculas, utiliza el método toUpperCase() para convertirla en mayúsculas. Luego, imprime el resultado.
const originalString = 'hola mundo'
18.2 Convertir a Minúsculas
Dada una cadena de texto en mayúsculas, utiliza el método toLowerCase() para convertirla en minúsculas. Luego, imprime el resultado.
const originalString = 'Hola a Todos'
18.3 Longitud de Cadena
Dada una cadena de texto, utiliza la propiedad length para determinar la cantidad de caracteres en la cadena. Luego, imprime el resultado.
const text = 'JavaScript'
18.4 Encontrar Subcadena
Dada una cadena de texto y una subcadena, utiliza el método indexOf() para encontrar la posición de la subcadena en la cadena principal. Luego, imprime el resultado.
const sentence = 'Hola, ¿cómo estás?'
18.5 Extraer Subcadena
Dada una cadena de texto, utiliza el método slice() para extraer una porción de la cadena. Luego, imprime el resultado.
const originalString = 'Programación en JavaScript'
18.6 Dividir en Subcadenas
Dada una cadena de texto que contiene palabras separadas por espacios, utiliza el método split() para dividir la cadena en un array de palabras individuales. Luego, imprime el array resultante.
const sentence = 'Esta es una oración de ejemplo.' */

const originalString = 'hola mundo';
const mayusculas = originalString.toUpperCase();
console.log(mayusculas);

const originalString2 = 'Hola a Todos';
const minusculas = originalString2.toLowerCase();
console.log(minusculas);

const text = 'JavaScript';
const longitud = text.length;
console.log(longitud);

const sentence = 'Hola, ¿cómo estás?';
const posicion = sentence.indexOf('cómo');
console.log(posicion);

const originalString3 = 'Programación en JavaScript';
const subcadena = originalString3.slice(0, 11);
console.log(subcadena);

const sentence2 = 'Esta es una oración de ejemplo.';
const palabras = sentence2.split(' ');
console.log(palabras);
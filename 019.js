/* Ejercicio 19: 
19.1 Reemplazar Subcadena
Dada una cadena de texto, utiliza el método replace() para reemplazar una subcadena específica por otra. Luego, imprime la cadena resultante.
const sentence = 'El perro es fiel y el gato es independiente.'
19.2 Verificar Inclusión
Dada una cadena de texto y una subcadena, utiliza el método includes() para verificar si la cadena principal contiene la subcadena. Luego, imprime el resultado.
const phrase = 'JavaScript es divertido'
const searchTerm = 'divertido'
19.3 Eliminar Espacios
Dada una cadena de texto que tiene espacios en blanco al principio y al final, utiliza el método trim() para eliminar esos espacios. Luego, imprime el resultado.
const text = '    Hola, mundo   '
19.4 Convertir a Cadena
Dado un número, utiliza el método toString() para convertirlo en una cadena de texto. Luego, imprime el resultado.
const number = 42
19.5 Formatear Decimales
Dado un número decimal, utiliza el método toFixed() para formatearlo con una cantidad específica de decimales. Luego, imprime el resultado.
const value = 3.14159
19.6 Convertir a Entero
Dada una cadena numérica, utiliza el método parseInt() para convertirla en un número entero. Luego, imprime el resultado.
const numString = '25' */

const sentence = 'El perro es fiel y el gato es independiente.';
const newSentence = sentence.replace('gato', 'conejo');
console.log(newSentence);

const phrase = 'JavaScript es divertido';
const searchTerm = 'divertido';
const contains = phrase.includes(searchTerm);
console.log(contains);

const text = '    Hola, mundo   ';
const trimmedText = text.trim();
console.log(trimmedText);

const number = 42;
const stringNumber = number.toString();
console.log(stringNumber);

const value = 3.14159;
const formattedValue = value.toFixed(2);
console.log(formattedValue);

const numString = '25';
const integerNumber = parseInt(numString);
console.log(integerNumber);
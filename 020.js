/* Ejercicio 20: 
20.1 Convertir a Flotante
Dada una cadena numérica, utiliza el método parseFloat() para convertirla en un número de punto flotante. Luego, imprime el resultado.
const floatString = '3.14'
20.2 Verificar Número Entero
Dado un valor, utiliza el método Number.isInteger() para verificar si es un número entero. Luego, imprime el resultado para ambos ejemplos.
const num1 = 42
const num2 = 3.14
20.3 Redondear
Dado un número decimal, utiliza la función Math.round() para redondearlo al entero más cercano. Luego, imprime el resultado.
const value = 3.6
20.4 Redondear Abajo
Dado un número decimal, utiliza la función Math.floor() para redondearlo hacia abajo al entero más cercano. Luego, imprime el resultado.
const value = 5.8
20.5 Redondear Arriba
Dado un número decimal, utiliza la función Math.ceil() para redondearlo hacia arriba al entero más cercano. Luego, imprime el resultado.
const value = 2.3
20.6 Número Aleatorio
Utiliza la función Math.random() para generar un número aleatorio entre 1 y 10. Luego, imprime el número aleatorio. */

const floatString = '3.14';
const floatNumber = parseFloat(floatString);
console.log(floatNumber);

const num1 = 42;
const num2 = 3.14;

console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));

const value = 3.6;
const roundedValue = Math.round(value);
console.log(roundedValue);

const value2 = 5.8;
const roundedDownValue = Math.floor(value2);
console.log(roundedDownValue);

const value3 = 2.3;
const roundedUpValue = Math.ceil(value3);
console.log(roundedUpValue);
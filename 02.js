/*  Ejercicio 2: Operadores y Condicionales
1. Declara una variable puntuacion y asígnale un valor entre 0 y 100 para representar una calificación.
2. Utiliza un condicional if para verificar si la puntuacion es mayor o igual a 70. Si es verdadero, muestra en la consola "Aprobado", de lo contrario, muestra "Reprobado".
3. Declara una variable dia y asígnale un número del 1 al 7 para representar un día de la semana (1: Lunes, 2: Martes, ..., 7: Domingo).
4. Utiliza una estructura switch para mostrar en la consola el nombre del día correspondiente al número asignado a dia.
5. Crea una función llamada convertirFahrenheit que tome la temperatura en grados Celsius como argumento y devuelva la temperatura equivalente en grados Fahrenheit utilizando la fórmula: (C × 9/5) + 32.
6. Utiliza la función convertirFahrenheit para mostrar la temperatura en grados Fahrenheit en la consola.
7. Crea una funcion llamada esPar que tome un numero como argumento y devuelva true o false si el numero es par. Puedes utilizar el operador modulo % para ver si tiene resto la operación y saber si es par o no.
8. Utiliza la función esPar */

let puntuacion = 85;

if (puntuacion >= 70) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

let dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Número de día no válido");
}

function convertirFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

let temperaturaCelsius = 25;
let temperaturaFahrenheit = convertirFahrenheit(temperaturaCelsius);
console.log(`${temperaturaCelsius}°C equivalen a ${temperaturaFahrenheit}°F`);

function esPar(numero) {
    return numero % 2 === 0;
}

let numeroPrueba = 42;
if (esPar(numeroPrueba)) {
    console.log(`${numeroPrueba} es un número par`);
} else {
    console.log(`${numeroPrueba} es un número impar`);
}
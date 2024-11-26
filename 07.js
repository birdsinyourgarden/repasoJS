/* Ejercicio 7: Bucle Do...While
Utiliza un bucle do...while para pedir al usuario que ingrese un número positivo. 
Continúa pidiendo hasta que ingrese un número negativo.
*/

const numeros = [10, 15, 20, 5, -1];
let indice = 0;
let numero;

do {
    numero = numeros[indice];
    indice;

    if (numero >= 0) {
        console.log(`Ingresaste el número positivo: ${numero}`);
    }
} while (numero >= 0 && indice < numeros.length);

console.log("Ingresaste un número negativo. Fin.");
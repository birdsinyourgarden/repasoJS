/* Ejercicio 12: Parámetros y Argumentos
Crea una función llamada calcularAreaRectangulo que acepte dos parámetros: base y altura. 
La función debe calcular y retornar el área del rectángulo. */

function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

let base = 5;
let altura = 10; 
let area = calcularAreaRectangulo(base, altura);

console.log(`El área del rectángulo es: ${area}`);
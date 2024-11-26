/* Ejercicio 13: Retorno de Valores
Crea una función llamada esMayorDeEdad que acepte una edad como parámetro y retorne true si la edad es mayor o igual a 18, y false si no lo es. */

function esMayorEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

let edad = 20; 
let resultado = esMayorEdad(edad);

console.log(resultado);

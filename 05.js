/* Ejercicio 5: Declaración Switch
1. Crea una variable mes y asígnale un número del 1 al 12 para representar un mes del año.
2. Utiliza una declaración switch para mostrar en la consola la estación del año correspondiente al mes asignado.
3. Crea una función llamada calcularDiasMes que tome un número mes como argumento y devuelva la cantidad de días que tiene ese mes. Utiliza una declaración switch para calcular los días de cada mes.
4. Utiliza la función calcularDiasMes para mostrar en la consola la cantidad de días de un mes específico. */

let mes = 3; 

switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Invierno");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Primavera");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Verano");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Otoño");
        break;
    default:
        console.log("Número de mes no válido");
}


function calcularDiasMes(mes) {
    switch (mes) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31; 
        case 4: case 6: case 9: case 11:
            return 30; 
        case 2:
            return 28;
        default:
            return "Mes no válido"; 
    }
}


let diasDelMes = calcularDiasMes(mes);
console.log(`El mes ${mes} tiene ${diasDelMes} días.`);

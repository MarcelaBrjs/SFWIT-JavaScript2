// JAVASCRIPT 2

// Instrucciones: Encuentra el resultado de la suma de todos los elementos del arreglo.
    // El arreglo debe de ser menor a mil datos.
    // Se debe crear la función que haga la suma.

function total(datos) {
    let total = 0;
    if (datos.length <= 1000) {
        for (d of datos) {
            total = total + d;
        }
        return "La suma de los elementos en el arreglo es igual a " + total + ".";
    } else {
        return "El arreglo debe ser menor a 1,000 datos."
    }
}

let datos = [1,2,3];
console.log(total(datos));
// Iteradores de arreglos

let numeros = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

// Comprobar si un elemento existe en el arreglo
const contieneSiete = lenguajes.includes(7);

// Comprobar si al menos un elemento cumple con la condición
const contienePositivos = numeros.some((numero) => numero > 0);

// Encontrar el primer elemento que cumpla la condición
const primerElementoPositivo = numeros.find((numero) => numero > 0);

// Verificar que todos los elementos cumplan la condición
const todosPositivos = numeros.every((numero) => numero > 0);

// Acumular los elementos que cumplan la condición y crea un nuevo arreglo
const sumaPositivos = numeros.reduce((acumulador, numero) => {
    if (numero > 0) {
        return acumulador + numero;
    } else {
        return false;
    }
});

// Filtrar por elementos que cumplan la condicion y crea un nuevo arreglo.
const numerosPositivos = numeros.filter((numero) => numero > 0);

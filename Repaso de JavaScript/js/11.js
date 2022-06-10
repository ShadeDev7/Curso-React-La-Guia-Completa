// Iteradores de arreglos

let lenguajes = ["PHP", "JavaScript", "Ruby", "Python"];

// Accede a cada elemento del arreglo
lenguajes.forEach(function (lenguaje) {
    console.log(lenguaje);
});

// Accede a cada elemento del arreglo y lo retorna creando un nuevo arreglo
const lenguajesActualizados = lenguajes.map(function (lenguaje) {
    if (lenguaje === "PHP") {
        return "Perl";
    } else {
        return lenguaje;
    }
});

console.table(lenguajesActualizados);

// Accede a cada elemento del arreglo, si la condicion se cumple, lo retorna, creando un nuevo arreglo
const lenguajesFavoritos = lenguajes.filter(function (lenguaje) {
    return lenguaje === "Python" || lenguaje === "JavaScript";
});

console.table(lenguajesFavoritos);

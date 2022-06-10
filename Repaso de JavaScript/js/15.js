// Arrow Functions en iteradores de arreglos

let lenguajes = ["PHP", "JavaScript", "Ruby", "Python"];

// Accede a cada elemento del arreglo y lo retorna creando un nuevo arreglo (Arrow Functions)
const lenguajesActualizados = lenguajes.map((lenguaje) => {
    if (lenguaje === "PHP") {
        return "Perl";
    } else {
        return lenguaje;
    }
});

console.table(lenguajesActualizados);

// Accede a cada elemento del arreglo, si la condicion se cumple, lo retorna, creando un nuevo arreglo (Arrow Functions)
const lenguajesFavoritos = lenguajes.filter((lenguaje) => lenguaje === "Python" || lenguaje === "JavaScript");

console.table(lenguajesFavoritos);

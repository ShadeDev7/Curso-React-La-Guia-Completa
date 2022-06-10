// Operaciones con arreglos

let lenguajes = ["PHP", "JavaScript", "Ruby", "Python"];

console.table(lenguajes);

// Añadir elementos
lenguajes.push("C++"); // .push: Agrega un elemento al final del arreglo
lenguajes.unshift("C#"); // .unshift: Agrega un elemento al inicio del arreglo

console.table(lenguajes);

// Añadir elementos con Spread Operator (...) y sin mutar el arreglo original
let lenguajesActualizadosAlFinal = [...lenguajes, "Perl"]; // [...arr, elem]: Agrega un elemento al final del arreglo
let lenguajesActualizadosAlInicio = ["TypeScript", ...lenguajes]; // [elem, ...arr]: Agrega un elemento al inicio del arreglo

console.table(lenguajesActualizadosAlFinal);
console.table(lenguajesActualizadosAlInicio);

lenguajes = ["PHP", "JavaScript", "Ruby", "Python"];

// Eliminar elementos
lenguajes.pop(); // .pop: Elimina el último elemento del arreglo y lo retorna
lenguajes.shift(); // .shift: Elimina el primer elemento del arreglo y lo retorna
lenguajes.splice(1, 2); // .splice: Elimina elementos según los indices indicados y los retorna

console.table(lenguajes);

lenguajes = ["PHP", "JavaScript", "Ruby", "Python"];

// Eliminar elementos con filter para no mutar el arreglo original
const lenguajesFiltrados = lenguajes.filter(function (lenguaje) {
    return lenguaje !== "Ruby";
});

console.table(lenguajes);
console.table(lenguajesFiltrados);

// Remplazar elementos
lenguajes[2] = "C";

lenguajes = ["PHP", "JavaScript", "Ruby", "Python"];

// Remplazar elementos con map para no mutar el arrenglo original
const lenguajesRemplazados = lenguajes.map(function (lenguaje) {
    if (lenguaje === "C") {
        return "Ruby";
    } else {
        return lenguaje;
    }
});

console.table(lenguajes);
console.table(lenguajesRemplazados);

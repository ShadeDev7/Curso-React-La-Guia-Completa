// Comparación con operadores estrictos

const numeroInt = 1;
const numeroString = "1";

if (numeroInt == numeroString) {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

if (numeroInt === numeroString) {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

// Comparación estrictamente diferente
const string = new String("Sheine");
const stringPrimitiva = "Sheine";

if (string != stringPrimitiva) {
    console.log("No son iguales");
} else {
    console.log("Son iguales");
}

if (string !== stringPrimitiva) {
    console.log("No son iguales");
} else {
    console.log("Son iguales");
}

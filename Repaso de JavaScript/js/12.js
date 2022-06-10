// Declaración de funciones

function holaMundo() {
    console.log("Hola Mundo!");
}

holaMundo();

// Función con parámetros
function sumar(a, b) {
    console.log(a + b);
}

sumar(3, 4);

// Función con parámetros por defecto
function resta(a = 0, b = 0) {
    console.log(a - b);
}

resta(10, 5);

// Función que retorna un valor
function multiplicar(a = 0, b = 0) {
    const resultado = a * b;

    return { resultado, mensaje: "El resultado de " + a + " * " + b + " es " + resultado };
}

const { resultado, mensaje } = multiplicar(5, 7);
console.log(resultado);
console.log(mensaje);

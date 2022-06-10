// Funciones de flecha (Arrow Functions)

// Estructura: const nombre = (parametros) => {}

const sumar = (a = 0, b = 0) => {
    return a + b;
};

console.log(sumar(5, 7));

// Dar como implícito el return (solo una linea de código)
const restar = (a = 0, b = 0) => a - b;

console.log(restar(5, 2));

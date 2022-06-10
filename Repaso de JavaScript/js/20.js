// Operador ternario

// Estructura: condicion === true ? valor1 : valor2

const edad = 18;

edad >= 18 ? console.log("Sos mayor de edad.") : console.log("No sos mayor de edad.");

// Doble ternario
const saldo = 750;
const total = 500;
const tieneTarjeta = false;

tieneTarjeta
    ? saldo >= total
        ? console.log("Podes pagar.")
        : console.log("No podes pagar.")
    : console.log("No tenes tarjeta.");

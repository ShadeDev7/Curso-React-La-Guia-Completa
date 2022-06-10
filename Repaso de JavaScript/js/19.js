// Comparar dos o mas condiciones

const saldo = 750;
const total = 500;
const tieneTarjeta = true;

if (!tieneTarjeta || saldo < total) {
    console.log("No podes pagar.");
} else {
    console.log("Podes pagar.");
}

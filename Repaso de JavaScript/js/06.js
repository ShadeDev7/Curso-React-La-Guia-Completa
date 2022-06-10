// Destructuring con dos o más objetos

const persona = {
    nombre: "Agustín",
    apellido: "Arnoldi",
    edad: 17,
    lenguajeFavorito: "Python",
};

const cliente = {
    nombre: "Juan",
    apellido: "Perez",
    premium: true,
};

const { nombre, apellido, edad, lenguajeFavorito } = persona;
const { nombre: nombreCliente, apellido: apellidoCliente, premium } = cliente;

console.log(nombre);
console.log(nombreCliente);

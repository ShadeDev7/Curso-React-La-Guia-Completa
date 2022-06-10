// Unir dos objetos o más

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

// Utilizando el Spread Operator (...), para no mutar los objetos iniciales
const datos = {
    persona: { ...persona },
    cliente: { ...cliente },
};

console.log(datos);

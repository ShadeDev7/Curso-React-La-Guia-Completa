// Objetos

const persona = {
    nombre: "Agustín",
    apellido: "Arnoldi",
    edad: 17,
    lenguajeFavorito: "Python",
};

console.log(persona);

// Accediendo a los valores de un objeto mediante syntaxis de punto
console.log(persona.nombre);

// Accediendo a los valores de un objeto mediante syntaxis de arreglo
console.log(persona["apellido"]);

// Destructuración de objetos
const { lenguajeFavorito } = persona;

console.log(lenguajeFavorito);

// Object Literal Enhancement
const inteligente = true;

const personaEvaluada = {
    nombre: persona.nombre,
    inteligente,
};

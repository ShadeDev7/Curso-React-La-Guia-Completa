// Manipulación de Objetos

const persona = {
    nombre: "Agustín",
    apellido: "Arnoldi",
    edad: 17,
    lenguajeFavorito: "Python",
};

console.log(persona);

// Object.freeze(objeto) - No permite modificar ni añadir ni eliminar propiedades del objeto
// Object.seal(objeto) - Permite modificar propiedades existentes pero no añadir ni eliminar propiedades del objeto

// Re-escribir un valor de una propiedad existente
persona.nombre = "Agustín Ignacio";

console.log(persona);

// Crear nueva propiedad, si no existe
persona.numeroFavorito = 7;

console.log(persona);

// Eliminar una propiedad
delete persona.lenguajeFavorito;

console.log(persona);

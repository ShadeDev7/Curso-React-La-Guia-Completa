// Template Strings

const nombre = "Agustín";
const apellido = "Arnoldi";
const edad = 17;

// Antes
console.log("Hola, soy " + nombre + " " + apellido + " y tengo " + edad + " años :D");

// Después
console.log(`Hola, soy ${nombre} ${apellido} y tengo ${edad} años :D`);

// Permite la mayoría de las expresiones de código dentro de las llaves
const presentarse = (nombre, apellido, edad) => {
    return `Hola, soy ${nombre} ${apellido} y tengo ${edad} años :D`;
};

console.log(`Presentación: ${presentarse(nombre, apellido, edad)}`);

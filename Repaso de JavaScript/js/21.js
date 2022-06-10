// Alcance de las variables (Scope)

const precio = 750;

const obtenerPrecio = () => {
    const precio = 500;

    console.log(precio);
};

console.log(precio);

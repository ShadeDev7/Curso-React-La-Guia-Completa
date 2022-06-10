// Eventos del DOM - submit

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const password = document.getElementById("password").value;

    if (nombre === "" || password === "") {
        console.log("¡Todos los campos son obligatorios!");
    } else {
        console.log("Enviando formulario...");
    }
});

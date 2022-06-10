// Evento de submit en formulario

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const password = document.getElementById("password").value;

    const alertaPrevia = document.querySelector(".alerta");

    if (alertaPrevia) {
        alertaPrevia.remove();
    }

    const alerta = document.createElement("div");
    alerta.classList.add("alerta");
    alerta.style.marginBottom = "16px";

    if (nombre === "" || password === "") {
        alerta.classList.add("error");
        alerta.innerText = "¡Todos los campos son obligatorios!";
    } else {
        alerta.classList.add("exito");
        alerta.innerText = "Enviando formulario...";
    }

    formulario.appendChild(alerta);
});

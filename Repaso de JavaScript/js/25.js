// Eventos del DOM - inputs

const inputNombre = document.querySelector("#nombre");
const inputPassword = document.querySelector("#password");

inputNombre.addEventListener("input", (e) => {
    console.log(e.target.value);
});

inputPassword.addEventListener("input", (e) => {
    e.target.type = "text";

    setTimeout(() => {
        e.target.type = "password";
    }, 150);
});

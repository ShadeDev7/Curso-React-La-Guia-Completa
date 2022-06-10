// Manipular HTML

const heading = document.querySelector("h2");
heading.innerText = "Nuevo heading!";

const inputNombre = document.querySelector("#nombre");
inputNombre.value = "Agustín";

const enlaces = document.querySelectorAll("a");

enlaces.forEach((enlace) => {
    enlace.style.color = "red";
});

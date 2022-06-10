// Eventos del DOM - Clicks

const heading = document.querySelector("h2");

heading.addEventListener("click", () => {
    heading.innerText = "Nuevo heading!";
});

const enlaces = document.querySelectorAll("a");

enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(enlace.innerText);
    });
});

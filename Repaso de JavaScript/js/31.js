// FetchAPI con Async/Await (Multiples llamados)

const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/photos";

const consultarAPIaLaVez = async () => {
    const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)]);

    const resultado = await respuesta.json();
    const resultado2 = await respuesta2.json();

    console.log(resultado);
    console.log(resultado2);
};

consultarAPIaLaVez();

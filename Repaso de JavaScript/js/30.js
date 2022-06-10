// FetchAPI con Async/Await

const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = async () => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
};

consultarAPI();

// Fetch API

const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = () => {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
};

consultarAPI();

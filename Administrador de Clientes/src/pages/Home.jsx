import { useState, useEffect } from "react";

import Client from "../components/Client";

const Home = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const url = "https://my-json-server.typicode.com/ShadeDev7/Curso-React-La-Guia-Completa/clientes";
                const request = await fetch(url);
                const response = await request.json();

                setClients(response);
            } catch (e) {
                console.log(e);
            }
        };
        fetchClients();
    }, []);

    const handleDelete = async id => {
        const confirmed = confirm("¿Deseas realmente eliminar este cliente?");

        if (confirmed) {
            try {
                const url = `https://my-json-server.typicode.com/ShadeDev7/Curso-React-La-Guia-Completa/clientes/${id}`;

                await fetch(url, {
                    method: "DELETE",
                });

                setClients(clients.filter(client => client.id !== id));
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
            <p className="mt-3">Administra tus clientes.</p>

            <table className="w-full mt-5 table-auto shadow bg-white">
                <thead className="bg-blue-800 text-white">
                    <tr>
                        <th className="p-2">Nombre</th>
                        <th className="p-2">Empresa</th>
                        <th className="p-2">Contacto</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {clients.map(client => (
                        <Client key={client.id} client={client} handleDelete={handleDelete} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Home;

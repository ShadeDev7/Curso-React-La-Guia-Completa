import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Spinner from "../components/Spinner";

const ClientDisplay = () => {
    const [client, setClient] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);

        const fetchUser = async () => {
            try {
                const url = `https://my-json-server.typicode.com/ShadeDev7/Curso-React-La-Guia-Completa/clientes/${id}`;
                const request = await fetch(url);
                const response = await request.json();

                if (Object.keys(response).length === 0) {
                    return navigate("/clientes");
                }

                setClient(response);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchUser();
    }, []);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                Object.keys(client).length > 0 && (
                    <>
                        <h1 className="font-black text-4xl text-blue-900">Ver Cliente</h1>
                        <p className="mt-3">Información acerca de éste cliente.</p>

                        {client.name && (
                            <p className="text-gray-700 text-2xl mt-10">
                                <span className="uppercase font-bold">Cliente: </span>
                                {client.name}
                            </p>
                        )}

                        {client.company && (
                            <p className="text-gray-600 text-2xl mt-2">
                                <span className="uppercase font-bold">Empresa: </span>
                                {client.company}
                            </p>
                        )}

                        {client.email && (
                            <p className="text-gray-600 text-2xl mt-2">
                                <span className="uppercase font-bold">Email: </span>
                                {client.email}
                            </p>
                        )}

                        {client.phone && (
                            <p className="text-gray-600 text-2xl mt-2">
                                <span className="uppercase font-bold">Teléfono: </span>
                                {client.phone}
                            </p>
                        )}

                        {client.notes && (
                            <p className="text-gray-600 text-2xl mt-2">
                                <span className="uppercase font-bold">Notas: </span>
                                {client.notes}
                            </p>
                        )}
                    </>
                )
            )}
        </>
    );
};

export default ClientDisplay;

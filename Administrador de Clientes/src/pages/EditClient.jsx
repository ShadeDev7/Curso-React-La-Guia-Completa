import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ClientForm from "../components/ClientForm";
import Spinner from "../components/Spinner";

const EditClient = () => {
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
            <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
            <p className="mt-3">Completa el siguiente formulario para editar el cliente.</p>

            {loading ? <Spinner /> : <ClientForm client={client} />}
        </>
    );
};

export default EditClient;

import { useNavigate } from "react-router-dom";

const Client = ({ client, handleDelete }) => {
    const navigate = useNavigate();

    const { id, name, company, email, phone } = client;

    return (
        <tr className="text-center border-b hover:bg-gray-100 transition-colors duration-200">
            <td className="p-3">{name}</td>
            <td className="p-3">{company}</td>
            <td className="p-3">
                <p>
                    <span className="text-gray-800 uppercase font-bold">Email:</span> {email}
                </p>
                <p>
                    <span className="text-gray-800 uppercase font-bold">Teléfono:</span> {phone}
                </p>
            </td>
            <td className="p-3 ">
                <button
                    type="button"
                    className="bg-green-600 hover:bg-green-700 block w-full text-white p-2 uppercase font-bold text-xs transition-colors duration-300"
                    onClick={() => navigate(`/clientes/${id}`)}
                >
                    Ver
                </button>
                <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs transition-colors duration-300 mt-3"
                    onClick={() => navigate(`/clientes/editar/${id}`)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs transition-colors duration-300 mt-3"
                    onClick={() => handleDelete(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default Client;

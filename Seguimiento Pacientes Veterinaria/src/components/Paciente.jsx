const Paciente = ({ paciente, setPaciente, deletePaciente }) => {
    const { id, nombre, dueño, email, inscripcion, sintomas } = paciente;

    const handleDelete = () => {
        const confirmado = confirm("¿Realmente deseas eliminar este paciente?");

        if (confirmado) deletePaciente(id);
    };

    return (
        <div className="my-5 bg-white shadow-md rounded-xl py-10 px-5">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Dueño: <span className="font-normal normal-case">{dueño}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Correo electrónico: <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de inscripción: <span className="font-normal normal-case">{inscripcion}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between gap-2 mt-5">
                <button
                    type="button"
                    className="py-2 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-8 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded"
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Paciente;

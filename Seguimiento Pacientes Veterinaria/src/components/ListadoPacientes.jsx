import Paciente from "./Paciente";

const ListadoPacientes = ({
    pacientes,
    setPaciente,
    deletePaciente,
}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll mx-5">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">
                        Pacientes
                    </h2>

                    <p className="my-5 text-center">
                        <span className="text-indigo-600 font-bold">
                            Administra
                        </span>{" "}
                        tus pacientes y citas!
                    </p>

                    {pacientes.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            deletePaciente={deletePaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">
                        Aun no hay pacientes!
                    </h2>

                    <p className="py-5 md:my-5 md:py-0 text-center">
                        <span className="text-indigo-600 font-bold">
                            Lista
                        </span>{" "}
                        tus pacientes y citas aquí
                    </p>
                </>
            )}
        </div>
    );
};

export default ListadoPacientes;

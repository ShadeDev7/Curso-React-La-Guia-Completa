import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({
    pacientes,
    setPacientes,
    paciente,
    setPaciente,
}) => {
    const [nombre, setNombre] = useState("");
    const [dueño, setDueño] = useState("");
    const [email, setEmail] = useState("");
    const [inscripcion, setInscripcion] = useState("");
    const [sintomas, setSintomas] = useState("");

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length === 0) return;

        setNombre(paciente.nombre);
        setDueño(paciente.dueño);
        setEmail(paciente.email);
        setInscripcion(paciente.inscripcion);
        setSintomas(paciente.sintomas);
    }, [paciente]);

    const fechaActual = () => {
        const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: "America/Argentina/Buenos_Aires",
        });

        return new Date(formatter.format(new Date()))
            .toISOString()
            .split("T")[0];
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            [nombre, dueño, email, inscripcion, sintomas].includes("")
        )
            return setError(true);

        setError(false);

        const objPaciente = {
            nombre: nombre.trim(),
            dueño: dueño.trim(),
            email: email.trim(),
            inscripcion,
            sintomas: sintomas.trim(),
        };

        if (paciente.id) {
            objPaciente.id = paciente.id;

            const pacientesActualizados = pacientes.map((p) =>
                p.id === paciente.id ? objPaciente : p
            );

            setPacientes(pacientesActualizados);
            setPaciente({});
        } else {
            objPaciente.id = Math.random().toString(16).substring(2);

            setPacientes([...pacientes, objPaciente]);
        }

        setNombre("");
        setDueño("");
        setEmail("");
        setInscripcion("");
        setSintomas("");
    };

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h1 className="font-black text-3xl text-center">
                Seguimiento
            </h1>

            <p className="my-5 text-center">
                <span className="text-indigo-600 font-bold">
                    Añade
                </span>{" "}
                pacientes y administralos!
            </p>

            <form
                autoComplete="off"
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-5 mx-5"
                onSubmit={handleSubmit}
            >
                {error && (
                    <Error>Todos los campos son obligatorios!</Error>
                )}
                <div className="mb-5">
                    <label
                        htmlFor="nombre"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre del paciente
                    </label>

                    <input
                        id="nombre"
                        type="text"
                        placeholder="Nombre del paciente"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) =>
                            setNombre(e.target.value.trimStart())
                        }
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="dueño"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre del dueño
                    </label>

                    <input
                        id="dueño"
                        type="text"
                        placeholder="Nombre del dueño"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={dueño}
                        onChange={(e) =>
                            setDueño(e.target.value.trimStart())
                        }
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Correo electrónico
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Correo electrónico"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value.trimStart())
                        }
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="inscripcion"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Fecha de inscripción
                    </label>

                    <input
                        id="inscripcion"
                        type="date"
                        min={fechaActual()}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={inscripcion}
                        onChange={(e) =>
                            setInscripcion(e.target.value)
                        }
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Síntomas del paciente
                    </label>

                    <textarea
                        id="sintomas"
                        placeholder="Síntomas del paciente"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={(e) =>
                            setSintomas(e.target.value.trimStart())
                        }
                    />
                </div>

                <input
                    type="submit"
                    value={paciente.id ? "Editar" : "Agregar"}
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                />
            </form>
        </div>
    );
};

export default Formulario;

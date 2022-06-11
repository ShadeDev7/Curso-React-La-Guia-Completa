import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    useEffect(() => {
        setPacientes(
            JSON.parse(localStorage.getItem("pacientes")) ?? []
        );
    }, []);

    useEffect(() => {
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }, [pacientes]);

    return (
        <div className="container mx-auto mt-10">
            <Header />
            <div className="mt-12 md:flex">
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    deletePaciente={(id) =>
                        setPacientes(
                            pacientes.filter((p) => p.id !== id)
                        )
                    }
                />
            </div>
        </div>
    );
}

export default App;

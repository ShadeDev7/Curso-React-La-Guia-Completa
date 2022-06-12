import { useState } from "react";

import Message from "./Message";

const NewBudget = ({ budget, setBudget, setIsValid }) => {
    const [message, setMessage] = useState("");

    const handleBudget = e => {
        e.preventDefault();

        if (budget <= 0) {
            setMessage("El presupuesto es inválido.");

            return;
        }

        setMessage("");
        setIsValid(true);
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" onSubmit={handleBudget}>
                <div className="campo">
                    <label>Definir Presupuesto</label>

                    <input
                        type="number"
                        className="nuevo-presupuesto"
                        placeholder="Añadir nuevo presupuesto"
                        value={budget}
                        onChange={e => setBudget(Number(e.target.value))}
                    />
                </div>

                <input type="submit" value="Añadir" />

                {message && <Message type="error">{message}</Message>}
            </form>
        </div>
    );
};

export default NewBudget;

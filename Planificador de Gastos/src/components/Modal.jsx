import { useState, useEffect } from "react";

import { trimAll } from "../helpers";

import Message from "./Message";

import CloseIcon from "../img/cerrar.svg";

const Modal = ({ setShowModal, animateModal, setAnimateModal, saveExpense, expenseEdition, setExpenseEdition }) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const [message, setMessage] = useState("");

    useEffect(() => {
        if (Object.keys(expenseEdition).length === 0) return;

        setId(expenseEdition.id);
        setName(expenseEdition.name);
        setQuantity(expenseEdition.quantity);
        setCategory(expenseEdition.category);
        setDate(expenseEdition.date);
    }, []);

    const hideModal = () => {
        setAnimateModal(false);

        setTimeout(() => {
            setShowModal(false);
        }, 250);

        setExpenseEdition({});
    };

    const handleSubmit = e => {
        e.preventDefault();

        setName(trimAll(name));

        if (!name || quantity <= 0 || !category) {
            setMessage("Los campos son inválidos.");

            return;
        }

        saveExpense({ name, quantity, category, id, date });
    };

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CloseIcon} alt="Cerrar Modal" onClick={hideModal} />
            </div>

            <form
                autoComplete="off"
                className={`formulario ${animateModal ? "animar" : "cerrar"}`}
                onSubmit={handleSubmit}
            >
                <div className="campo">
                    <legend>{Object.keys(expenseEdition).length === 0 ? "Nuevo Gasto" : "Editar Gasto"}</legend>

                    {message && <Message type="error">{message}</Message>}

                    <label htmlFor="nombre">Nombre</label>

                    <input
                        type="text"
                        id="nombre"
                        placeholder="Nombre del gasto"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>

                    <input
                        type="number"
                        id="cantidad"
                        placeholder="Cantidad del gasto"
                        value={quantity.toString()}
                        onChange={e => setQuantity(Number(e.target.value))}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoría</label>

                    <select id="categoria" value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="">-- Seleccionar -- </option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos varios">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value={Object.keys(expenseEdition).length === 0 ? "Añadir" : "Editar"} />
            </form>
        </div>
    );
};

export default Modal;

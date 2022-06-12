import { useState, useEffect } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { formatCurrency } from "../helpers";

const BudgetControl = ({ budget, setBudget, expenses, setExpenses, setFilter, setIsValid }) => {
    const [spentPercentaje, setSpentPercentaje] = useState(0);
    const [remaining, setRemaining] = useState(budget);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpend = expenses.reduce((total, expense) => total + expense.quantity, 0);

        setSpent(totalSpend);
        setRemaining(budget - totalSpend);

        setTimeout(() => {
            setSpentPercentaje(((totalSpend / budget) * 100).toFixed(2));
        }, 500);
    }, [expenses]);

    const handleReset = () => {
        const confirmed = confirm("¿Realmente quieres resetear la App?");

        if (!confirmed) return;

        setBudget(0);
        setExpenses([]);
        setFilter("");
        setIsValid(false);
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: spentPercentaje > 100 ? "#dc2626" : "#3b82f6",
                        trailColor: "#f5f5f5",
                        textColor: spentPercentaje > 100 ? "#dc2626" : "#3b82f6",
                    })}
                    value={spentPercentaje}
                    text={`${spentPercentaje > 9999 ? "+9999" : spentPercentaje}% Gastado`}
                />
            </div>

            <div className="contenido-presupuesto">
                <button className="reset-app" type="button" onClick={handleReset}>
                    Resetear App
                </button>

                <p>
                    <span>Presupuesto:</span> {formatCurrency(budget)}
                </p>
                <p className={`${remaining < 0 ? "negativo" : ""}`}>
                    <span>Disponible:</span> {formatCurrency(remaining)}
                </p>
                <p>
                    <span>Consumido:</span> {formatCurrency(spent)}
                </p>
            </div>
        </div>
    );
};

export default BudgetControl;

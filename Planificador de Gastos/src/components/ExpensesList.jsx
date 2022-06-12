import Expense from "./Expense";

import { firstCharToUppercase } from "../helpers";

const ExpensesList = ({ expenses, setExpenseEdition, deleteExpense, filter, filteredExpenses }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>
                {filter
                    ? filteredExpenses.length > 0
                        ? `Tus Gastos en ${firstCharToUppercase(filter)}`
                        : `Sin Gastos en ${firstCharToUppercase(filter)}`
                    : expenses.length > 0
                    ? "Tus Gastos"
                    : "Sin Gastos"}
            </h2>

            {(filter ? filteredExpenses : expenses).map(expense => (
                <Expense
                    key={expense.id}
                    expense={expense}
                    setExpenseEdition={setExpenseEdition}
                    deleteExpense={deleteExpense}
                />
            ))}
        </div>
    );
};

export default ExpensesList;

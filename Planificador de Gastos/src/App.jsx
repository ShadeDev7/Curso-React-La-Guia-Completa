import { useState, useEffect } from "react";

import { generateId, getCurrentDate } from "./helpers";

import Header from "./components/Header";
import ExpensesFilter from "./components/ExpensesFilter";
import ExpensesList from "./components/ExpensesList";
import Modal from "./components/Modal";

import NewExpenseIcon from "./img/nuevo-gasto.svg";

function App() {
    const [budget, setBudget] = useState(Number(localStorage.getItem("budget")) ?? 0);
    const [isValid, setIsValid] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [animateModal, setAnimateModal] = useState(false);

    const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem("expenses")) ?? []);

    const [expenseEdition, setExpenseEdition] = useState({});

    const [filter, setFilter] = useState("");
    const [filteredExpenses, setFilteredExpenses] = useState([]);

    useEffect(() => {
        if (Object.keys(expenseEdition).length === 0) return;

        setShowModal(true);

        setTimeout(() => {
            setAnimateModal(true);
        }, 250);
    }, [expenseEdition]);

    useEffect(() => {
        localStorage.setItem("budget", budget ?? 0);
    }, [budget]);

    useEffect(() => {
        if (!filter) return;

        setFilteredExpenses(expenses.filter(expense => expense.category === filter));
    }, [filter, expenses]);

    useEffect(() => {
        if (Number(localStorage.getItem("budget")) > 0) setIsValid(true);

        localStorage.setItem("expenses", JSON.stringify(expenses) ?? []);
    }, [expenses]);

    const handleNewExpense = () => {
        setShowModal(true);

        setExpenseEdition({});

        setTimeout(() => {
            setAnimateModal(true);
        }, 250);
    };

    const saveExpense = expense => {
        if (expense.id) {
            setExpenses(expenses.map(expenseItem => (expenseItem.id === expense.id ? expense : expenseItem)));
            setExpenseEdition({});
        } else {
            setExpenses([...expenses, { ...expense, id: generateId(), date: getCurrentDate() }]);
        }

        setAnimateModal(false);

        setTimeout(() => {
            setShowModal(false);
        }, 250);
    };

    const deleteExpense = id => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    return (
        <div className={showModal ? "fijar" : ""}>
            <Header
                budget={budget}
                setBudget={setBudget}
                isValid={isValid}
                setIsValid={setIsValid}
                expenses={expenses}
                setExpenses={setExpenses}
                setFilter={setFilter}
            />

            {isValid && (
                <>
                    <main>
                        <ExpensesFilter filter={filter} setFilter={setFilter} />

                        <ExpensesList
                            expenses={expenses}
                            setExpenseEdition={setExpenseEdition}
                            deleteExpense={deleteExpense}
                            filter={filter}
                            filteredExpenses={filteredExpenses}
                        />
                    </main>

                    <div className="nuevo-gasto">
                        <img src={NewExpenseIcon} alt="Nuevo Gasto" onClick={handleNewExpense} />
                    </div>
                </>
            )}

            {showModal && (
                <Modal
                    setShowModal={setShowModal}
                    animateModal={animateModal}
                    setAnimateModal={setAnimateModal}
                    saveExpense={saveExpense}
                    expenseEdition={expenseEdition}
                    setExpenseEdition={setExpenseEdition}
                />
            )}
        </div>
    );
}

export default App;

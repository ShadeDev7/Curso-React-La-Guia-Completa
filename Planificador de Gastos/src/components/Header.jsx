import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";

const Header = ({ budget, setBudget, isValid, setIsValid, expenses, setFilter, setExpenses }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValid ? (
                <BudgetControl
                    budget={budget}
                    setBudget={setBudget}
                    setIsValid={setIsValid}
                    expenses={expenses}
                    setFilter={setFilter}
                    setExpenses={setExpenses}
                />
            ) : (
                <NewBudget budget={budget} setBudget={setBudget} setIsValid={setIsValid} />
            )}
        </header>
    );
};

export default Header;

const ExpensesFilter = ({ filter, setFilter }) => {
    return (
        <div className="filtros sombra contenedor">
            <div>
                <div className="campo">
                    <label htmlFor="">Filtrar Gastos</label>

                    <select value={filter} onChange={e => setFilter(e.target.value)}>
                        <option value="">-- Todas las Categorías --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos varios">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ExpensesFilter;

import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import { firstCharToUppercase } from "../helpers";

import SavingIcon from "../img/icono_ahorro.svg";
import HomeIcon from "../img/icono_casa.svg";
import FoodIcon from "../img/icono_comida.svg";
import ExpensesIcon from "../img/icono_gastos.svg";
import LeisureIcon from "../img/icono_ocio.svg";
import HealthIcon from "../img/icono_salud.svg";
import SubscriptionIcon from "../img/icono_suscripciones.svg";

const categoryIcons = {
    ahorro: SavingIcon,
    comida: HomeIcon,
    casa: FoodIcon,
    gastos: ExpensesIcon,
    ocio: LeisureIcon,
    salud: HealthIcon,
    suscripciones: SubscriptionIcon,
};

const Expense = ({ expense, setExpenseEdition, deleteExpense }) => {
    const { id, name, quantity, category, date } = expense;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setExpenseEdition(expense)}>Editar</SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => deleteExpense(id)} destructive={true}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    );

    return (
        <SwipeableList>
            <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img src={categoryIcons[category]} alt={`Icono de ${firstCharToUppercase(category)}`} />

                        <div className="descripcion-gasto">
                            <p className="categoria">{category}</p>
                            <p className="nombre-gasto">{name}</p>
                            <p className="fecha-gasto">
                                Agregado el: <span>{date}</span>
                            </p>
                        </div>
                    </div>

                    <p className="cantidad-gasto">${quantity}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    );
};

export default Expense;

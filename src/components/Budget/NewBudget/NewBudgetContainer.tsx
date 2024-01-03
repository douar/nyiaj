import NewExpense from "./NewExpense";
import NewIncome from "./NewIncome";

function NewBudgetContainer() {
    return (
        <>
            <div className="new-budget-container">
                <NewExpense />
                <NewIncome />
            </div>
        </>
    )
}

export default NewBudgetContainer
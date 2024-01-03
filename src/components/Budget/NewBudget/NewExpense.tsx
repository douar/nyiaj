import {ExpenseCategories, ExpenseState} from "../../../redux/ExpenseSlice";
import React, {useState} from "react";

function NewExpense() {
    const defaultExpenseCategory: string[] = Object.values(ExpenseCategories);
    defaultExpenseCategory.unshift("Select a Category")
    const [newExpense, setNewExpense] = useState<ExpenseState>({
        expenseActive: true,
        expenseAmount: 0.0,
        expenseCategory: "",
        expenseName: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewExpense((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setNewExpense((prevData) => ({
            ...prevData,
            expenseCategory: value,
        }));
        console.log(newExpense)
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Access the form data in the state (formData) and perform any necessary actions
        console.log('Form submitted with data:', newExpense);
    };
    return (
        <>
            <div className="new-expense-container">
                <div className="new-expense-input-form">
                    <h2>Add Expense Item</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="expenseName">Expense</label>
                        <input type="text"
                               id="expenseName"
                               name="expenseName"
                               placeholder="Expense Item"
                               value={newExpense.expenseName}
                               onChange={handleInputChange}
                        />

                        <label htmlFor="expenseAmount">Amount</label>
                        <input type="number"
                               id="expenseAmount"
                               name="expenseAmount"
                               placeholder="Amount"
                               value={newExpense.expenseAmount}
                               onChange={handleInputChange}
                        />

                        <label htmlFor="expenseCategory">Category</label>
                        <select id="expenseCategory"
                                name="expenseCategory"
                                value={newExpense.expenseCategory}
                                onChange={handleSelectChange}
                        >
                            {Object.values(defaultExpenseCategory).map((category: string, index: number) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>


                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewExpense
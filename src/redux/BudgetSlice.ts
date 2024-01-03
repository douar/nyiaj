import {ExpenseState} from "./ExpenseSlice";
import {ActionReducerMapBuilder, createSlice, Slice} from "@reduxjs/toolkit";

export interface BudgetState {
    expenses: ExpenseState[]
}

export const initialBudgetState: BudgetState = {
    expenses: []
}

export const budgetSlice: Slice<BudgetState> = createSlice({
    name: 'BUDGET',
    initialState: initialBudgetState,
    reducers: {

    },
    extraReducers: (builder: ActionReducerMapBuilder<BudgetState>) => {

    }
})

export const {

} = budgetSlice.actions

export default budgetSlice.reducer
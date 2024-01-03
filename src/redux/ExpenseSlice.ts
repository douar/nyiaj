import {ActionReducerMapBuilder, createSlice, Slice} from "@reduxjs/toolkit";

export enum ExpenseCategories {
    housing = "Housing",
    utilities = "Utilities",
    personal = "Personal",
    health = "Health",
    subscriptions = "Subscriptions",
    household = "Household",
    entertainment = "Entertainment",
    transportation = "Transportation",
    debt = "Debt",
    otherExpense = "Other Expense"
}

export interface ExpenseState {
    expenseName: string,
    expenseAmount: number,
    expenseActive?: boolean,
    expenseCategory: string
}

export const initialExpenseState: ExpenseState = {
    expenseName: "",
    expenseAmount: 0,
    expenseCategory: ""
}
export const expenseSlice: Slice<ExpenseState> = createSlice({
    name: 'EXPENSE',
    initialState: initialExpenseState,
    reducers: {
        addExpense: (state: ExpenseState, action: {type: string, payload: ExpenseState}) => {
            state.expenseName = action.payload.expenseName
            state.expenseAmount = action.payload.expenseAmount
            state.expenseActive = action.payload.expenseActive
            state.expenseCategory = action.payload.expenseCategory
        },
    },
    extraReducers: (builder:  ActionReducerMapBuilder<ExpenseState>) => {
        // When log in success & user{} has been set with logged-in user info - Invoke fetchOrgByCode (async thunk API) to get remaining org info from BE & update id, name, and logo in user.orgainziation
        // builder.addCase(fetchOrgByCode.fulfilled, (state: UserState, action: { type: string, payload: Organization }) => {
        //     const orgFromAPI: Organization = action.payload
        //     const updateOrg: Organization | undefined = state.user?.organizations.find((org: Organization) => org.code === orgFromAPI.code)
        //     if(updateOrg) {
        //         updateOrg.active = orgFromAPI.active
        //         updateOrg.name = orgFromAPI.name
        //         updateOrg.logo = orgFromAPI.logo
        //     }
        // });
    }
})

export const {
    addExpense,
} = expenseSlice.actions
export default expenseSlice.reducer
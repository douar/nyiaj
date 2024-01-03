import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {expenseSlice, ExpenseState} from "./ExpenseSlice";
import {budgetSlice, BudgetState} from "./BudgetSlice";

// const userPersistConfig = {
//     key: 'USER',
//     storage: storage,
//     whitelist: ["user", "currentOrg", "signedIn", "userError"]
// }

export const rootReducer = combineReducers({
    // user: persistReducer(userPersistConfig, userSlice.reducer),
    expense: expenseSlice.reducer,
    budget: budgetSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

// export const persistor: Persistor = persistStore(store);

// EXPORTING STATE AS A TYPE ==========================
// export type RootState = ReturnType<typeof store.getState>
export type RootState = {
    expense: ExpenseState,
    budget: BudgetState
}

// EXPORTING STORE & REACT dispatch METHOD ============
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
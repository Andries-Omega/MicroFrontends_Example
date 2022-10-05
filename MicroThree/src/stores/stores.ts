import { configureStore } from "@reduxjs/toolkit";
import cartStateReducer from "./cart-state/cart-state";

export const store = configureStore({
    reducer: {
        cartState: cartStateReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
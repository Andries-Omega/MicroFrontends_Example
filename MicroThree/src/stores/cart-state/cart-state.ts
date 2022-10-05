import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProducts } from "../../models/cart-products";
import { CartState } from "../../models/state";

const initialState: CartState = {
    cartProducts: []
}

const cartSlice = createSlice({
    name: 'Cart State',
    initialState,
    reducers: {
        saveCartProducts: (state, { payload }: PayloadAction<CartProducts[]>) => {
            state.cartProducts = payload
        }
    }
})

export const { saveCartProducts } = cartSlice.actions

export default cartSlice.reducer
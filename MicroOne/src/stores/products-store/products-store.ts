import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../models/products";
import { ProductsState } from "../../models/state";

const initialState: ProductsState = {
    products: []
}

const productsSlice = createSlice({
    name: 'ProductsList',
    initialState,
    reducers: {
        updateProducts: (state, {payload}: PayloadAction<Products[]>) => {
            state.products = payload
        }
    }
})

export const { updateProducts } = productsSlice.actions

export default productsSlice.reducer 
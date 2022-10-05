import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../models/products";
import { ProductState } from "../../models/state";


const initialState: ProductState = {
    product: null
}

const productSlice = createSlice({
    name: 'ProductSlice',
    initialState,
    reducers: {
        saveProduct: (state, {payload}: PayloadAction<Products>) => {
            state.product = payload
        }
    }
})

export const { saveProduct } = productSlice.actions

export default productSlice.reducer
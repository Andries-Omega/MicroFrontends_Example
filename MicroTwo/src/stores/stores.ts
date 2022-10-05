import { configureStore } from '@reduxjs/toolkit'
import productStateReducer from './product-store/product-store'

export const store =  configureStore({
    reducer: {
        productState: productStateReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
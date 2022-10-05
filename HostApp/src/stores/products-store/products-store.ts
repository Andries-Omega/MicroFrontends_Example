import BlackDress from 'assets/images/black-dress.jpg'
import BlackShoes from 'assets/images/black-shoes.jpg'
import ShirtShoe from 'assets/images/shirt-shoe-combo.jpg'
import StrippedShirt from 'assets/images/stripped-shirt.jpg'
import StrippedSweater from 'assets/images/stripped-sweater.jpg'
import WhiteShirt from 'assets/images/white-shirt.jpg'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsState } from "../../models/state";
import { Products } from '../../models/products'

// Mock data as e.g.
const initialState:ProductsState = {
    cartProducts: [],
    allProducts:[

        {
            productId: '1',
            productTitle: 'Black Dress',
            productDescription: `Voluptate minim cupidatat proident eu adipisicing. Cillum veniam cillum labore laboris cupidatat adipisicing irure et id ipsum. Laboris dolor laboris do commodo quis. 
                                In enim sint anim nisi occaecat consequat sint reprehenderit cupidatat adipisicing est. Anim reprehenderit sit officia sit consequat et ipsum. 
                                Officia magna sint elit reprehenderit ex enim est sint cupidatat mollit laborum non. Est laborum dolor ad fugiat in sit esse nulla duis sit nulla.
                                `,
            productPrice: 300,
            productImage: origin + BlackDress,
            cartQuantity: 0
        },
        {
            productId: '2',
            productTitle: 'Black Shoes',
            productDescription: `Voluptate minim cupidatat proident eu adipisicing. Cillum veniam cillum labore laboris cupidatat adipisicing irure et id ipsum. Laboris dolor laboris do commodo quis. 
                                In enim sint anim nisi occaecat consequat sint reprehenderit cupidatat adipisicing est. Anim reprehenderit sit officia sit consequat et ipsum. 
                                Officia magna sint elit reprehenderit ex enim est sint cupidatat mollit laborum non. Est laborum dolor ad fugiat in sit esse nulla duis sit nulla.
                                `,
            productPrice: 412.34,
            productImage: origin + BlackShoes,
            cartQuantity: 0
        },
        {
            productId: '3',
            productTitle: 'Shirt Shoe Combo',
            productDescription: `Voluptate minim cupidatat proident eu adipisicing. Cillum veniam cillum labore laboris cupidatat adipisicing irure et id ipsum. Laboris dolor laboris do commodo quis. 
                                In enim sint anim nisi occaecat consequat sint reprehenderit cupidatat adipisicing est. Anim reprehenderit sit officia sit consequat et ipsum. 
                                Officia magna sint elit reprehenderit ex enim est sint cupidatat mollit laborum non. Est laborum dolor ad fugiat in sit esse nulla duis sit nulla.
                                `,
            productPrice: 2345.2,
            productImage: origin + ShirtShoe,
            cartQuantity: 0
        },
        {
            productId: '4',
            productTitle: 'Stripped Shirt',
            productDescription: `Voluptate minim cupidatat proident eu adipisicing. Cillum veniam cillum labore laboris cupidatat adipisicing irure et id ipsum. Laboris dolor laboris do commodo quis. 
                                In enim sint anim nisi occaecat consequat sint reprehenderit cupidatat adipisicing est. Anim reprehenderit sit officia sit consequat et ipsum. 
                                Officia magna sint elit reprehenderit ex enim est sint cupidatat mollit laborum non. Est laborum dolor ad fugiat in sit esse nulla duis sit nulla.
                                `,
            productPrice: 50,
            productImage: origin + StrippedShirt,
            cartQuantity: 0
        },
        {
            productId: '5',
            productTitle: 'Stripped Sweater',
            productDescription: `Voluptate minim cupidatat proident eu adipisicing. Cillum veniam cillum labore laboris cupidatat adipisicing irure et id ipsum. Laboris dolor laboris do commodo quis. 
            In enim sint anim nisi occaecat consequat sint reprehenderit cupidatat adipisicing est. Anim reprehenderit sit officia sit consequat et ipsum. 
            Officia magna sint elit reprehenderit ex enim est sint cupidatat mollit laborum non. Est laborum dolor ad fugiat in sit esse nulla duis sit nulla.
            `,
            productPrice: 120,
            productImage: origin + StrippedSweater,
            cartQuantity: 0
        },
        {
            productId: '6',
            productTitle: 'White Shirt',
            productDescription: `Voluptate minim cupidatat proident eu adipisicing. Cillum veniam cillum labore laboris cupidatat adipisicing irure et id ipsum. Laboris dolor laboris do commodo quis. 
            In enim sint anim nisi occaecat consequat sint reprehenderit cupidatat adipisicing est. Anim reprehenderit sit officia sit consequat et ipsum. 
            Officia magna sint elit reprehenderit ex enim est sint cupidatat mollit laborum non. Est laborum dolor ad fugiat in sit esse nulla duis sit nulla.
            `,
            productPrice: 320,
            productImage: origin + WhiteShirt,
            cartQuantity: 0
        }

    ]
}

const productsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        addProductToCart: (state, { payload }: PayloadAction<Products>) => {
            state.cartProducts = [...state.cartProducts, payload]
        },
        removeProductFromCart: (state, {payload}: PayloadAction<string>) => {
            state.cartProducts = state.cartProducts.filter(({productId}) => productId !== payload)
        },
        updateCartProducts: (state, {payload}: PayloadAction<Products[]> ) => {
            state.cartProducts = payload
        }
    }
})

export const {addProductToCart, removeProductFromCart, updateCartProducts} = productsSlice.actions

export default productsSlice.reducer
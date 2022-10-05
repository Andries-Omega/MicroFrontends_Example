import { CartProducts } from "./models/cart-products";
import { store } from "./stores/stores";
import { CommunicationTypes } from "./types/communication-types"
import { saveCartProducts as saveCartProductsState } from "./stores/cart-state/cart-state"; 

// listener
export const listener = ({data}: MessageEvent) => {
    const { type, message } = data

    switch(type){
        case CommunicationTypes.SEND_CART_PRODUCTS:
            saveCartProducts(message)
            break;
        case CommunicationTypes.REMOVED_PRODUCT_FROM_CART:
            break;
        case CommunicationTypes.CHANGE_PRODUCT_QUANTITY:
            break;
        default:
            break;
    }
}

// workers
const saveCartProducts = (cartProducts: CartProducts[]) => {
    store.dispatch(saveCartProductsState(cartProducts))
}

// sender
export const sendMessage = (type: string, origin:string, message?: any) => {
    parent.postMessage({type, message}, origin)
}
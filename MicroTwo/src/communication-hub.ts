import { Products } from "./models/products";
import { CommunicationTypes } from "./types/communication-types"
import { saveProduct as saveProductState } from "./stores/product-store/product-store";
import { store } from "./stores/stores";

// listener
export const listener = ({data}: MessageEvent) => {
    const {type, message } = data

    switch(type){
        case CommunicationTypes.SEND_PRODUCT:
            saveProduct(message)
            break;
        default:
            break;
    }
}

// workers
const saveProduct = (product:Products) => {
    store.dispatch(saveProductState(product))
}

// responder
 
// sender
export const sendMessage= (type: string, origin:string, message?: string) => {
    parent.postMessage({type, message}, origin)
}
import { CommunicationTypes } from "./types/communication-types";
import {updateProducts as UpdateProductsState} from './stores/products-store/products-store'
import { Products } from "./models/products";
import { store } from "./stores/stores";

// listener
export const listener = ({data}: MessageEvent) => {
    const {type, message} = data;
    switch(type){  
        case CommunicationTypes.SEND_ALL_PRODUCTS:
        updateProducts(message)
    break;
    default:
        break;
    }
}

// worker
const updateProducts = (message: Products[]) => {
    store.dispatch(UpdateProductsState(message))
}

// responder

// sender
export const sendMessage= (type: string, origin:string, message?: string) => {
    parent.postMessage({type, message}, origin)
}





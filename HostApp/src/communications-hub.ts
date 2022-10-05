import { useNavigate } from "react-router-dom";
import { Products } from "./models/products";
import { addProductToCart as addProductToCartState, removeProductFromCart as removeProductFromCartState, updateCartProducts } from "./stores/products-store/products-store";
import { store } from "./stores/stores";
import { CommunicationTypes } from "./types/CommunicationTypes";
// Listener
export const listener = ({data, origin}: MessageEvent) => {
 
    const {type, message} = data
    switch(type){
        case CommunicationTypes.SEND_ALL_PRODUCTS:
            sendAllProducts(origin)
        break;
        case CommunicationTypes.SEND_PRODUCT: 
            sendProduct(origin)
        break;
        case CommunicationTypes.ADD_PRODUCT_TO_CART: 
            addProductToCart(message)
        break;
        case CommunicationTypes.REMOVED_PRODUCT_FROM_CART:
            removeProductFromCart(message)
        break;
        case CommunicationTypes.CHANGE_PRODUCT_QUANTITY: 
            changeProductQuantity(message, origin)
        break;
        case CommunicationTypes.SEND_CART_PRODUCTS:
            sendCartProducts(origin)
        break;
        case CommunicationTypes.NAVIGATE:
            navigate(message)
        break;
        default:
        break;
    }

}

// Workers
const sendAllProducts = (origin: string) => {
    responder(CommunicationTypes.SEND_ALL_PRODUCTS, findProducts('all'), 'products', origin)
}

const sendCartProducts = (origin: string) => {
    responder(CommunicationTypes.SEND_CART_PRODUCTS, findProducts('cart'), 'cart', origin)
}

const sendProduct = (origin: string) => {
    const splitPath = location.pathname.split('/')
    const productId = splitPath[splitPath.length-1]
    responder(CommunicationTypes.SEND_PRODUCT, findProductById(productId), 'product', origin)
}

const addProductToCart = (productId: string) => {
    const product = findProductById(productId)

    if(product){
        findProducts('cart').some(({productId}) => productId === product.productId) ? alert('Product already on cart') : store.dispatch(addProductToCartState({...product, cartQuantity: 1}))
    }
}  

const removeProductFromCart = (productId: string) => {
    store.dispatch(removeProductFromCartState(productId))
    sendCartProducts('http://localhost:3003')
}

const navigate = (url:string) => {
    location.replace(url)
}

const changeProductQuantity = ({productId, cartQuantity}: {productId: string, cartQuantity: number}, origin: string) => {
    const products = findProducts('cart')
    
    if(products.some((product) => product.productId === productId)){
        store.dispatch(updateCartProducts(products.map((product) => 
            product.productId === productId 
            ? ({...product, cartQuantity}) 
            : product
        )))
        sendCartProducts('http://localhost:3003')
    }  

}

function findProducts (which: 'all' | 'cart') {
    const productsState = store.getState().productsState
    return which === 'cart' ? productsState.cartProducts : productsState.allProducts
}

const findProductById = (productId: string): Products | undefined => {
    return findProducts('all').find((prod) => prod.productId === productId)
}

// Responder 
const responder = (type: string, message:any, frameId:string, origin:string) => {
    const {contentWindow} = document.getElementById(frameId) as HTMLIFrameElement
    contentWindow && contentWindow.postMessage({type, message}, origin)
}
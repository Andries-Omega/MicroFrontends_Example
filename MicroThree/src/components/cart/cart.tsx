import { sendMessage } from "../../communication-hub";
import { CartProducts } from "../../models/cart-products";
import { CommunicationTypes } from "../../types/communication-types";
import {motion} from 'framer-motion'
import './cart.css'
export default function Cart({cartProduct, index}: {cartProduct: CartProducts, index:number}){
    const parentUrl = 'http://localhost:3000'
    const removeFromCart = () => {
        sendMessage(CommunicationTypes.REMOVED_PRODUCT_FROM_CART, parentUrl, cartProduct.productId)
    }

    const incProductQty = () => {
        sendMessage(CommunicationTypes.CHANGE_PRODUCT_QUANTITY, parentUrl, {productId: cartProduct.productId ,cartQuantity: cartProduct.cartQuantity +1})
    }

    const decProductQty = () => {
        cartProduct.cartQuantity !== 1 && sendMessage(CommunicationTypes.CHANGE_PRODUCT_QUANTITY, parentUrl, {productId: cartProduct.productId ,cartQuantity: cartProduct.cartQuantity -1})
    }

    return (
        <motion.div 
            className="cart-wrapper" 
            initial={{x: -500, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: .5, delay: index * .25, bounce: .5}}>
            <img src={cartProduct.productImage} className="cart-image" />
            <div className="cart-info-wrapper">
                <h1 className="title">{cartProduct.productTitle}</h1>
                <div className="quantity-controller">
                    <button className="minus-btn" onClick={() => {decProductQty()}}>-</button>
                    <p>{cartProduct.cartQuantity}</p>
                    <button className="plus-btn" onClick={() => {incProductQty()}}>+</button>
                </div>
                <p>R{cartProduct.productPrice * cartProduct.cartQuantity}</p>
                <button className="remove-from-cart-btn" onClick={() => {removeFromCart()}}>Remove</button>
            </div>
        </motion.div>
    )
}
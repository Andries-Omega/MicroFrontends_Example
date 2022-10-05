import { Products } from "../../models/products";
import {motion} from 'framer-motion'
import './product.css'
import { sendMessage } from "../../communication-hub";
import { CommunicationTypes } from "../../types/communication-types";
export default function  Product(product: Products) {
    const addProductToCart = (productId: string) => {
        sendMessage(CommunicationTypes.ADD_PRODUCT_TO_CART, 'http://localhost:3000', productId)
    }
    return (
        <motion.div 
            className="product-wrapper"
            initial={{x: -500, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: .7, bounce: .25}}>

            <img className="product-image" src={product.productImage} />
            <div className="product-info-wrapper">
                <h1 className="title">{product.productTitle}</h1>
                <p>R{product.productPrice}</p>
                <div className="paragraph-wrapper">
                    <p className= "break-words text-ellipsis">{product.productDescription}</p>
                </div>
                <button className="add-to-cart-btn" onClick={() => {addProductToCart(product.productId)}}>Add To Cart</button>
            </div>
        </motion.div>
    )
}
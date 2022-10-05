import { sendMessage } from "../../communications-hub";
import { Products } from "../../models/products";
import { CommunicationTypes } from "../../types/communication-types";
import './product.css';
export default function Product(product:Products){
    const parentOrigin = 'http://localhost:3000'

    const viewDetails = (productId:string) => {
        sendMessage(CommunicationTypes.NAVIGATE, parentOrigin,'products/'+productId )
    }
  
    const addToCart = (productId: string) => {
        sendMessage(CommunicationTypes.ADD_PRODUCT_TO_CART, parentOrigin, productId)
    }

    return (
        <div className="product-cart">
            <img className="product-image" src={product.productImage} />
            <div className="details-wrapper">
                <h1 className="title">{product.productTitle}</h1>
                <p className="mr-auto ml-5">R{product.productPrice}</p>
                <button className="view-details-btn" onClick={() => {viewDetails(product.productId)}}>View Details</button>
                <button className="add-to-cart-btn" onClick={() => {addToCart(product.productId)}}>{product.cartQuantity ? 'Remove From Cart' : 'Add To Cart'}</button>
            </div>
        </div>
    )
}
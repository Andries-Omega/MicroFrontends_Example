import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import { listener, sendMessage } from './communication-hub'
import Cart from './components/cart/cart'
import { RootState } from './stores/stores'
import { CommunicationTypes } from './types/communication-types'

function App() {
  useEffect(() => {
    sendMessage(CommunicationTypes.SEND_CART_PRODUCTS, 'http://localhost:3000')
    onmessage = listener
  }, [])


  const cartProducts = useSelector((rootState:RootState) => rootState.cartState.cartProducts)

  if(!cartProducts.length) return <h1 className='text-3xl font-bold text-center'>Nothing to see here</h1> 

  const getTotalPrice = () => {
    const productPrices = cartProducts.map(({productPrice, cartQuantity}) => productPrice * cartQuantity)
    return productPrices.reduce((prevProductPrice, currentProductPrice) => prevProductPrice + currentProductPrice).toFixed(2)
  }
  return (
    <div className="flex w-full h-fit gap-6 overflow-hidden">
      <div className='flex flex-col gap-5 flex-grow items-center overflow-auto max-h-[50rem]'>
        {cartProducts.map((cartProduct, index) => <Cart key={cartProduct.productId} cartProduct={cartProduct} index={index}/>)}
      </div>

      <div className="w-fit">
        <h1 className='text-2xl font-medium'>Total R{
          getTotalPrice()
        }</h1>
      </div>
    </div>
  )
}

export default App

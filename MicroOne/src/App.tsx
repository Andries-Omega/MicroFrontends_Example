import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import { listener, sendMessage } from './communications-hub'
import Product from './components/product/product'
import { RootState } from './stores/stores'
import { CommunicationTypes } from './types/communication-types'

function App() {

  useEffect(() => {
    sendMessage(CommunicationTypes.SEND_ALL_PRODUCTS, 'http://localhost:3000')
    onmessage = listener
  },[])

  const products = useSelector((rootState: RootState) => rootState.productsState.products)

  return (
    <div className="grid grid-cols-3 gap-5">
      {products.map((product) => <Product key={product.productId} {...product}/>)}
    </div>
  )
}

export default App

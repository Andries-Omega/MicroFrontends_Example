import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import { listener, sendMessage } from './communication-hub'
import Product from './components/product/product'
import { RootState } from './stores/stores'
import { CommunicationTypes } from './types/communication-types'

function App() {
  useEffect(() => {
    sendMessage(CommunicationTypes.SEND_PRODUCT, 'http://localhost:3000')
    onmessage = listener
  }, [])

  const product = useSelector((rootState: RootState) => rootState.productState.product)

  if(!product) return <h1 className='text-3xl text-red-500 font-bold'>Nothing To Show Here</h1>

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Product {...product} />
    </div>
  )
}

export default App

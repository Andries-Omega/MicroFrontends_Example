import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { listener } from './communications-hub'
import { useSelector } from 'react-redux'
import { RootState } from './stores/stores'


function App() {

  onmessage = listener
  const bgImage = useSelector((rootState: RootState) => rootState.productsState.allProducts[0].productImage)
  useEffect(() => {
    onmessage = listener  

  }, [])
  return (
    <div>
      <Navbar />
      <div className="flex justify-center p-5">
        <Routes>
          <Route 
            path='/' 
            element={<Navigate replace to="/products" />} />
          <Route 
            path='/products' 
            element={<iframe id='products' src="http://localhost:3001" width={innerWidth-20} height={innerHeight-20} />} />
          <Route 
            path='/products/:productId' 
            element={<iframe id='product' src="http://localhost:3002" width={innerWidth-20} height={innerHeight-20} />} />
          <Route 
            path='/cart' 
            element={<iframe id='cart' src="http://localhost:3003" width={innerWidth-20} height={innerHeight-20} />} />
          <Route 
            path='*' 
            element={<h1 className='text-red-500 text-3xl font-bold text-center'>Not found</h1>} />
        </Routes>
      </div>
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import ShopCategory from './Pages/ShopCategory'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory category= "men"  />}  />
          <Route path='/women'   element={<ShopCategory  category= "women" /> }  />
          <Route path='/kids'  element={<ShopCategory category="kid" /> }  />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

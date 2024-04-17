import { useState } from 'react'

import './App.css'

import PageContainer from './containers/PageContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Home from './pages/Home' 

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css' 
import Detail from './pages/Detail'
import Cart from './pages/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 

 
    <PageContainer>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </PageContainer>

    
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Pricing from '../src/pages/Pricing'
import Photo from '../src/pages/PhotoPricing'
import Audio from '../src/pages/AudioPricing'
import Weeding from '../src/pages/WeedingPricing'
import Dev from '../src/pages/DevPricing'
import Infographie from '../src/pages/InfographiePricing'
import Neon from '../src/pages/NeonPricing'
import Shop from '../src/pages/Shop'
import Portfolio from '../src/pages/Portfolio'
import ScrollToTop from './utils/ScrollToTop'
import { CartProvider } from './context/CartContext'
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    })
  }, [])
  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/photo' element={<Photo />} />
          <Route path='/audio' element={<Audio />} />
          <Route path='/weeding' element={<Weeding />} />
          <Route path='/dev' element={<Dev />} />
          <Route path='/infographie' element={<Infographie />} />
          <Route path='/neon' element={<Neon />} />
        </Routes>
      </CartProvider>
    </Router>
  )
}

export default App

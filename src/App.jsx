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
import Cart from './components/Cart'
import ScrollToTop from './utils/ScrollToTop'
import { CartProvider } from './context/CartContext'
import Checkout from './pages/Checkout'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading' // Import the Loading component

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    })
  }, [])

  const handleLoadingComplete = () => {
    setLoading(false)
  }

  return (
    <Router>
      <ScrollToTop />
      {loading ? (
        <Loading onLoadingComplete={handleLoadingComplete} />
      ) : (
        <CartProvider>
          <Header />
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
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
          <Cart />
        </CartProvider>
      )}
    </Router>
  )
}

export default App

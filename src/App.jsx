import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Pricing from '../src/pages/Pricing'
import Shop from '../src/pages/Shop'
import Portfolio from '../src/pages/Portfolio'
import ScrollToTop from './utils/ScrollToTop'
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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App

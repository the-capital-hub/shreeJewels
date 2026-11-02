import { Routes, Route } from 'react-router-dom'
import './App.css'

import AIAssistant from './components/AIAssistant/AIAssistant'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Home } from './Page/Home'
import Collections from './Page/Collections/Collections'
import ProductDetails from './Page/ProductDetails/ProductDetails'
import About from './Page/About/About'
import CustomJewellery from './Page/CustomJewellery/CustomJewellery'
import VisitStore from './Page/VisitStore/VisitStore'
import Contact from './Page/Contact/Contact'
import Login from './Page/Login/Login'
import Register from './Page/Register/Register'
import Cart from './Page/Cart/Cart'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path= '/collections' element={<Collections/>}/>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/custom-jewellery" element={<CustomJewellery />} />
          <Route path="/visit-store" element={<VisitStore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <AIAssistant />
      <Footer />
    </>
  )
}

export default App
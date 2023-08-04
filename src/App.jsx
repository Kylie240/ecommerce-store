import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductPage, { CartContext } from './pages/ProductPage'
import Footer from "./components/Footer"
import Shop from "./pages/Shop"
import { useEffect, useState } from "react"

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    setCartItems([...cartItems, item])
  }

  useEffect(() => {
    const json = localStorage.getItem("cartItem")
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItems(savedCart)
    }
  }, [])

  useEffect(() => {
    const json = JSON.stringify(cartItems);
    localStorage.setItem("cartItem", json)
  }, [cartItems]);

  return (
    <Router>
      <CartContext.Provider value={{ cartItems, addToCart, setCartItems}}>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />

          <Route path='all' element={<Shop />} />

          <Route path='categories/product/:id' element={<ProductPage />} />
        </Routes>
        <Footer />
      </CartContext.Provider>
    </Router>
  )
}

export default App

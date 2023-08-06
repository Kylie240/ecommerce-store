import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductPage, { CartContext } from './pages/ProductPage'
import Footer from "./components/Footer"
import Shop from "./pages/Shop"
import All from "./components/Categories/All"
import Brand from "./components/Categories/Brand" 
import Color from "./components/Categories/Color" 
import Category from "./components/Categories/Category" 
import Price from "./components/Categories/Price" 

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    setCartItems([...cartItems, item])
  }

  const removeItem = (item) => {
    const newCart = cartItems.filter(shoe => shoe.id !== item.id)
    setCartItems(newCart)
  }

  useEffect(() => {
    console.log("load 1");
    const json = localStorage.getItem("cartItems")
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItems(savedCart)
      console.log("load 2");
    }
  }, [])

  useEffect(() => {
    const json = JSON.stringify(cartItems)
    localStorage.setItem("cartItems", json)
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems, removeItem}}>
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />

          <Route path='shop' element={<Shop />} >
            <Route path='all' element={<All />}/>
            <Route path='category/:param' element={<Category />}/>
            <Route path='brand/:param' element={<Brand />}/>
            <Route path='color/:param' element={<Color />}/>
            <Route path='price/:low/:high' element={<Price />}/>
          </Route>

          <Route path='product/:id' element={<ProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartContext.Provider>
  )
}

export default App

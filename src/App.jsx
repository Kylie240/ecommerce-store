import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Categories from './pages/Categories'
import ProductPage from './pages/ProductPage'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path='categories' element={<Categories />} />

        <Route path='categories/product/:id' element={<ProductPage />} />
      </Routes>
    </Router>
  )
}

export default App

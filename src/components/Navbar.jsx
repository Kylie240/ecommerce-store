import { useContext, useEffect, useState } from "react";
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { CartContext } from "../pages/ProductPage";
import Cart from "./Cart";
import MobileMenu from "./MobileMenu";


const Navbar = () => {
  const [openCart, setOpenCart] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [sticky, setSticky] = useState(false)

  const {cartItems} = useContext(CartContext)

  const handleMenu = () => {
    if (openMenu) {
      document.body.style.overflow = ""
      setOpenMenu(false)
    } else {
      document.body.style.overflow = "hidden"
      setOpenMenu(true)
    }
  }

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  window.addEventListener("scroll", handleScroll)

  return (
    <div className="navbar">
      <div className="nav-extra">
        <div>
          <Link to={"/"}>Find A Store</Link>
          <Link to={"/"}>Help</Link>
          <Link to={"/"}>Join Us</Link>
          <Link to={"/"}>Sign In</Link>
        </div>
      </div>
      <div className={`nav-main ${sticky ? "sticky" : ""}`}>
        <div className="navbar-container">
          <Link to={"/"} className="logo" onClick={() => window.scroll(0,0)}>
            <i class="fa-solid fa-flag-checkered fa-xl"></i>
          </Link>
          <div className="navbar-right">
            <div className="right-links"></div>
              <Link to={"/shop/all"}>Shop</Link>
              <Link>Brands</Link>
              <Link>Sale</Link>
              <div className="right-icons">
                <div className="cart-icon" onClick={() => setOpenCart(!openCart)}>
                  <i class="fa-solid fa-cart-shopping fa-lg"></i>
                  {cartItems.length > 0 ? <span className="cart-num">{cartItems.length}</span> : ""}
                </div>
                <i class="fa-solid fa-bars fa-lg" onClick={handleMenu}></i>
                {openMenu && <MobileMenu handleMenu={handleMenu} />}
              </div>
          </div>
        </div>
      {openCart && <Cart setOpenCart={setOpenCart}/>}
      </div>
    </div>
  )
}

export default Navbar
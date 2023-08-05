import { useEffect, useState } from "react";
import "./Navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [cart, setCart] = useState([])


  return (
    <div className='navbar'>
      <div className="navbar-container">
        <Link to={"/"} className="logo" onClick={() => window.scroll(0,0)}>
          <i class="fa-solid fa-flag-checkered fa-xl"></i>
        </Link>
        <div className="navbar-right">
            <Link to={"/shop/all"}>Shop All</Link>
            <Link to={"/shop/all"}>Brands</Link>
            <Link to={"/shop/sale"}>Sale</Link>
            <div className="cart-icon">
              <i class="fa-solid fa-cart-shopping"></i>
              {cart.length > 1 ? <span className="cart-num">{cart.length}</span> : ""}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
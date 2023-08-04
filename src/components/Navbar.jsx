import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-container">
        <i class="fa-solid fa-square-check"></i>
        <div className="navbar-right">
            <Link to={"/all"}>Shop</Link>
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar
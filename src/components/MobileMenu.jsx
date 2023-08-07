import { Link } from "react-router-dom"
import "./Navbar.css"

const MobileMenu = ({handleMenu}) => {
  return (
    <div className='mobile-menu'>
        <span onClick={handleMenu}>
            <i class="fa-solid fa-circle-xmark fa-2x"></i>    
        </span> 
        <Link onClick={handleMenu} to={"/shop/all"}>Shop</Link>
        <Link onClick={handleMenu} to={"/shop/all"}>Brands</Link>
        <Link onClick={handleMenu} to={"/shop/all"}>Sale</Link>
    </div>
  )
}

export default MobileMenu
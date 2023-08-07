import { Link } from "react-router-dom"
import "./Navbar.css"

const MobileMenu = ({handleMenu}) => {
  return (
    <div className='mobile-menu'>
        <span onClick={handleMenu}>
            <i class="fa-solid fa-circle-xmark fa-2x"></i>    
        </span> 
        <Link onClick={() => (setOpenMenu(false))} to={"/shop/all"}>Shop</Link>
        <Link onClick={() => (setOpenMenu(false))} to={"/shop/all"}>Brands</Link>
        <Link onClick={() => (setOpenMenu(false))} to={"/shop/all"}>Sale</Link>
    </div>
  )
}

export default MobileMenu
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-container">
        <i class="fa-solid fa-square-check"></i>
        <div className="navbar-right">
            <p>Categories</p>
            <p>Products</p>
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar
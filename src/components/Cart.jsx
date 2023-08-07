import { useContext, useEffect, useState } from "react"
import "./Cart.css"
import { CartContext } from "../pages/ProductPage"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"

const Cart = ({setOpenCart}) => {
    const {cartItems} = useContext(CartContext)
    const [sticky, setSticky] = useState(false)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((acc, item) => acc + item[0].price, 0);
        setTotal(newTotalPrice);
    }, [cartItems]);
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }
  
    window.addEventListener("scroll", handleScroll)

  return (
    <div>
        <div className={`cart-container ${sticky ? "sticky" : ""}`}>
            <div className="cart-top">
                <h3>Your Shopping Cart ({cartItems.length})</h3>
                <i class="fa-solid fa-xmark" onClick={() => setOpenCart(false)}></i>
            </div>
            {cartItems.length > 0 ? 
                <div className="cart-main">
                {cartItems.map((item) => (
                    <CartItem item={item} />
                ))}
            </div>
            : 
            <div className="cart-main">
            <p>Cart is empty</p>
            </div>
            }
            <div className="cart-bottom">
                <div className="cart-total">
                    Total: ${total}.00
                </div>
                {cartItems.length > 0 ? <Link>
                    <button>Checkout</button>
                </Link> :
                <Link to={"/shop/all"}>
                    <button>Start Shopping</button>
                </Link>
                }
            </div>
        </div>
    </div>
  )
}

export default Cart
import { useContext, useState } from "react"
import "./Cart.css"
import { CartContext } from "../pages/ProductPage"
import CartItem from "./CartItem"

const Cart = ({handleCart}) => {
    const {cartItems} = useContext(CartContext)
    const [total, setTotal] = useState(0)

  return (
    <div>
        <div className="cart-container">
            <div className="cart-top">
                <h3>Your Shopping Cart ({cartItems.length})</h3>
                <i class="fa-solid fa-xmark" onClick={() => handleCart()}></i>
            </div>
            <div className="cart-main">
                {cartItems.map((item) => (
                    <CartItem item={item} />
                ))}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    Total: ${total}.00
                </div>
                <button>Go To Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Cart
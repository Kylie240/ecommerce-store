import { useContext, useEffect, useState } from "react"
import "./Cart.css"
import { CartContext } from "../pages/ProductPage"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"

const Cart = ({handleCart}) => {
    const {cartItems} = useContext(CartContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotal(newTotalPrice);
    }, [cartItems]);

  return (
    <div>
        <div className="cart-container">
            <div>
                <div className="cart-top">
                    <h3>Your Shopping Cart ({cartItems.length})</h3>
                    <i class="fa-solid fa-xmark" onClick={() => handleCart()}></i>
                </div>
                <div className="cart-main">
                    {cartItems.map((item) => (
                        <CartItem item={item} />
                    ))}
                </div>
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    Total: ${total}.00
                </div>
                <Link>
                    <button>Checkout</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Cart
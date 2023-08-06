import { useContext } from "react"
import "./Cart.css"
import { CartContext } from "../pages/ProductPage"

const CartItem = ({item}) => {
  const {removeItem} = useContext(CartContext)
  const time = new Date().getTime()

  return (
    <div key={time} className="cart-item">
        <img src={item[0].img} alt={`${item[0].brand} ${item[0].name}`} />
        <div>
            <p className="cart-title">{item[0].brand} {item[0].name}</p>
            <p className="cart-extra">Men's Shoes</p>
            <p className="cart-size">{item[1]}</p>
            <p className="cart-price">${item[0].price}</p>
        </div>
        <i class="fa-solid fa-trash fa-lg" onClick={() => removeItem(item)}></i>
    </div>
  )
}

export default CartItem
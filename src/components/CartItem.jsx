import { useContext } from "react"
import "./Cart.css"
import { CartContext } from "../pages/ProductPage"

const CartItem = ({item}) => {
  const {removeItem} = useContext(CartContext)
  const time = new Date().getTime()
  console.log(item);

  return (
    <div key={time} className="cart-item">
        <img src={item.img} alt={`${item.brand} ${item.name}`} />
        <div>
            <p className="cart-title">{item.brand} {item.name}</p>
            <p className="cart-extra">Men's Shoes</p>
            <p className="cart-size">Size 8.5</p>
            <p className="cart-price">${item.price}</p>
        </div>
        <i class="fa-solid fa-trash fa-lg" onClick={() => removeItem(item)}></i>
    </div>
  )
}

export default CartItem
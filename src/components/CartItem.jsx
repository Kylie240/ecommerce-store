import "./Cart.css"

const CartItem = ({item}) => {
  return (
    <div key={item.id} className="cart-item">
        <img src={item.img} alt={`${item.brand} ${item.name}`} />
        <div>
            <p className="cart-title">{item.brand} {item.name}</p>
            <p className="cart-extra">Men's Shoes</p>
            <p className="cart-size">Size 8.5</p>
            <p className="cart-price">${item.price}</p>
        </div>
    </div>
  )
}

export default CartItem
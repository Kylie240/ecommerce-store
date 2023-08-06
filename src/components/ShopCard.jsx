import "./ShopCard.css"
import { Link } from "react-router-dom"

const ShopCard = ({name, brand, price, img, id}) => {
  return (
    <Link 
      onClick={() => {window.scrollTo(0,0)}}
      to={`/product/${id}`}
      className="shop-card">
        <img src={img}/>
        <div className="shop-bottom">
            <p className="shop-title">{brand} {name}</p>
            <p className="shoe-blurb">Men's Shoe</p>
            <p className="shop-price">${price}</p>
        </div>
    </Link>
  )
}

export default ShopCard
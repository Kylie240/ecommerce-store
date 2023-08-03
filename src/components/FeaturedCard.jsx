import "./Collection.css"
import { Link } from "react-router-dom"

const FeaturedCard = ({name, brand, price, img, id}) => {
  return (
    <Link 
      onClick={() => {window.scrollTo(0,0)}}
      to={`/categories/product/${id}`}
      className="collection-card">
        <img src={img}/>
        <div className="collection-bottom">
            <p className="shoe-title">{brand} {name}</p>
            <p className="collection-price">${price}</p>
        </div>
    </Link>
  )
}

export default FeaturedCard
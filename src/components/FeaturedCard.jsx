import "./Carousel.css"
import { Link } from "react-router-dom"

const FeaturedCard = ({name, brand, price, img, id}) => {
  return (
    <Link 
      onClick={() => {window.scrollTo(0,0)}}
      to={`/categories/product/${id}`}
      className="featured-card">
        <img src={img}/>
        <div className="featured-bottom">
            <p className="shoe-title">{brand} {name}</p>
            <p className="featured-price">${price}</p>
        </div>
    </Link>
  )
}

export default FeaturedCard
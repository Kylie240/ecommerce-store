import "./Grid.css"
import { Link } from "react-router-dom"

const GridCard = ({name, brand, price, img, id}) => {
  return (
    <Link 
      onClick={() => {window.scrollTo(0,0)}}
      to={`/product/${id}`}
      className="grid-card">
        <img src={img}/>
        <div className="grid-bottom">
            <p className="shoe-title">{brand} {name}</p>
            <p className="grid-price">${price}</p>
        </div>
    </Link>
  )
}

export default GridCard
import "./Featured.css"

const FeaturedCard = ({name, brand, price, img}) => {
  return (
    <div className="featured-card">
        <img src={img}/>
        <div className="featured-bottom">
            <p className="shoe-title">{brand} {name}</p>
            <p className="featured-price">${price}</p>
        </div>
    </div>
  )
}

export default FeaturedCard
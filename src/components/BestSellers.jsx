import "./Collection.css"
import {shoes} from "../ShoeData"
import FeaturedCard from "./FeaturedCard"

const BestSellers = () => {
    const newArray = shoes.filter(shoe => shoe.featured)

  return (
    <div className='collection container'>
        <div className="collection-container">
            <h3>Trending Styles</h3>
            <div className="collection-grid">
                {newArray.map((shoe) => (
                    <div key={shoe.id}>
                        <FeaturedCard 
                            id={shoe.id}
                            img={shoe.img}
                            brand={shoe.brand}
                            name={shoe.name}
                            price={shoe.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BestSellers
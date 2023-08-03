import "./Collection.css"
import {shoes} from "../ShoeData"
import FeaturedCard from "./FeaturedCard"

const Collection = () => {
    const newArray = shoes.filter(shoe => shoe.brand === "nike")

  return (
    <div className='collection container'>
        <div className="collection-container">
            <h3>Nike Collection</h3>
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

export default Collection
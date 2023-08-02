import "./Featured.css"
import {shoes} from "../ShoeData"
import { useState } from "react"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
    const [shoeData, setShoeData] = useState(shoes)
    console.log(shoes);

  return (
    <div className='featured container'>
        <div className="featured-container">
            <h3>Featured shoes</h3>
            <div className="featured-grid">
                {shoeData.map((shoe) => (
                    <div key={shoe.id}>
                        <FeaturedCard 
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

export default Featured
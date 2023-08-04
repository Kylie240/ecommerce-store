import "./Grid.css"
import {shoes} from "../ShoeData"
import GridCard from "./GridCard"

const Grid = () => {
    const newArray = shoes.filter(shoe => shoe.featured)

  return (
    <div className='grid container'>
        <div className="grid-container">
            <h3>Trending Styles</h3>
            <div className="grid-grid">
                {newArray.map((shoe) => (
                    <div key={shoe.id}>
                        <GridCard 
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

export default Grid
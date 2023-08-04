import React, { useState } from 'react'
import { shoes } from "../ShoeData"
import GridCard from '../components/GridCard';
import "../components/Shop.css"
import FilterMenu from '../components/FilterMenu';

const Shop = () => {
  const [newArray, setNewArray] = useState(shoes)

  return (
    <div className='shop-container'>
      <h3 className='results'>Results ({newArray.length})</h3>
      <div className='results-container'>
        <FilterMenu setNewArray={setNewArray} />
        <div className='shop-grid'>
          {newArray.map((shoe) => (
            <GridCard 
            id={shoe.id}
            img={shoe.img}
            brand={shoe.brand}
            name={shoe.name}
            price={shoe.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop
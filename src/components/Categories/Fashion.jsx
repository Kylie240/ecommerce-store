import React, { useState } from 'react'
import { shoes } from '../../ShoeData';
import GridCard from '../GridCard';
import "../../components/Shop.css"

const Fashion = ({newArray, setNewArray}) => {
  const filteredArray = shoes.filter(shoe => shoe.category.includes("fashion"))

  return (
    <div className='shop-grid'>
        {filteredArray.map((shoe) => (
        <GridCard 
        id={shoe.id}
        img={shoe.img}
        brand={shoe.brand}
        name={shoe.name}
        price={shoe.price}
        />
        ))}
    </div>
  )
}

export default Fashion